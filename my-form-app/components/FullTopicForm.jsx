"use client";
import styled from "styled-components";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function FullTopicForm({ id, title, description, tags }) {
  const router = useRouter();

  const [topics, setTopics] = useState([]);
  const [topicTags, setTopicTags] = useState([]);

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/topics", {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("Failed to fetch topics");
        }

        const data = await res.json();
        setTopics(data.topics);
      } catch (error) {
        console.log("Error loading topics: ", error);
      }
    };

    fetchTopics();
  }, []);

  useEffect(() => {
    const currentTopic = topics.find((topic) => topic.id === id);
    if (currentTopic) {
      setTopicTags(currentTopic.tags);
    }
  }, [topics, id]);

  return (
    <div>
      <PageWrapper>
        <ModalContainer>
          <h2>{title}</h2>
          <h4>asked by date by name</h4>
          <HR />
          <input></input>
          <div>{description}</div>
          <textarea></textarea>
          <TagsContainer>
            Tags:
            {tags.map((tag, index) => (
              <Tag key={index}>{tag}</Tag>
            ))}
          </TagsContainer>
          <Submit>Submit</Submit>
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
  background-color: black; /* Sets the background color of the hr */
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
