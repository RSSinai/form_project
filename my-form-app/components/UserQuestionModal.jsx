"use client";
import React, { useState } from "react";
import styled from "styled-components";

export default function UserQuestionsModal({ open, onClose }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const questionData = {
      title,
      description,
      tags: tags.split(",").map((tag) => tag.trim()),
    };

    try {
      const response = await fetch("http://localhost:3000/api/topics", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(questionData),
      });

      if (response.ok) {
        alert("Question submitted successfully!");
        onClose();
      } else {
        alert("Failed to submit. try again.");
      }
    } catch (error) {
      console.error("Error", error);
    }
  };

  if (!open) {
    return null;
  }
  return (
    <PageWrapper>
      <ModalContainer onSubmit={handleSubmit}>
        <h2>Ask Question</h2>
        <div>Title</div>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <div> Topic Description</div>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <div>Tags separated by ,</div>
        <input value={tags} onChange={(e) => setTags(e.target.value)} />
        <Submit type="submit">Submit</Submit>
        <CloseBtn onClick={onClose}>X</CloseBtn>
      </ModalContainer>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  width: 100%;
  height: 100%;
`;

const ModalContainer = styled.form`
  gap: 10px;
  max-width: 600px;
  width: 100%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  background-color: white;
  box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.75);
  height: 60vh;
  flex-direction: column;
  align-items: center;
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
