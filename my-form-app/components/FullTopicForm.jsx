"use client";
import styled from "styled-components";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function FullTopicForm({
  id,
  title,
  description,
  tags,
  comments,
}) {
  const router = useRouter();
  const [answer, setAnswer] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAnswerChange = (event) => {
    setAnswer(event.target.value);
  };

  const submitAnswer = async () => {
    setIsSubmitting(true);
    try {
      fetch(`http://localhost:3000/api/topics/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, answer }),
      });
    } catch (error) {
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <PageWrapper>
        <ModalContainer>
          <h2>{title}</h2>
          <h4>asked by date by name</h4>
          <HR />
          <div>{description}</div>
          <TagsContainer>
            Tags:
            {tags.map((tag, index) => (
              <Tag key={index}>{tag}</Tag>
            ))}
          </TagsContainer>
          <h2>Answers</h2>
          {comments.map((comment, index) => (
            <AnswerContainer key={index}>
              <Rating>
                <button onClick={() => handleRatingChange(comment.rating + 1)}>
                  +
                </button>
                {comment.rating}
                <button>-</button>
              </Rating>
              <Answer>{comment.answer}</Answer>
            </AnswerContainer>
          ))}
          <HR />
          <input
            value={answer}
            onChange={handleAnswerChange}
            placeholder="Reply an answer..."
          ></input>
          <button onClick={submitAnswer} disabled={isSubmitting}>
            Answer
          </button>
        </ModalContainer>
      </PageWrapper>
    </div>
  );
}

const PageWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
`;

const ModalContainer = styled.div`
  gap: 10px;
  max-width: 600px;
  width: 100%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  background-color: white;
  border: 1px solid black;
  height: 60vh;
  flex-direction: column;
`;

const CloseBtn = styled.p`
  position: fixed;
  top: 9px;
  right: 9px;
  border: 1px solid black;
`;

const Submit = styled.button`
  background-color: gray;
  height: 30px;
  width: fit-content;
`;

const HR = styled.hr`
  background-color: black;
  height: 1px;
  border: none;
  margin: 5px;
`;

const Tag = styled.div`
  background-color: #3498db;
  color: #fff;
  padding: 3px 8px;
  border-radius: 5px;
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;

const Answer = styled.div`
  display: flex;
  justify-content: flex-end;
  border: 1px solid black;
  width: fit-content;
`;

const AnswerContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 50px;
  gap: 10px;
`;

const Rating = styled.h2`
  display: flex;
  flex-direction: row;
`;
