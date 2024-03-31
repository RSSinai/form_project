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
<<<<<<< HEAD
  background-color: rgba(
    0,
    0,
    0,
    0.4
  ); /* Slightly lighter overlay for better visibility */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center; /* Center the modal container vertically and horizontally */
`;

const ModalContainer = styled.form`
  background-color: #ffffff; /* Clean white background */
  padding: 20px; /* Padding for inner spacing */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Softer shadow for a subtle depth effect */
  width: auto; /* Auto width based on content, with max-width set */
  max-width: 500px; /* Max width for better layout on larger screens */
  border-radius: 10px; /* Rounded corners for modern appearance */
  display: flex;
  flex-direction: column;
  gap: 15px; /* Increased gap for better spacing between elements */
  position: relative; /* Positioning for close button */
`;

const CloseBtn = styled.button`
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 1.5rem; /* Larger size for easier interaction */
  color: #707070; /* Subtle color that's easy on the eyes */
`;

const Submit = styled.button`
  background-color: #3498db; /* Matching button color with NavBar theme */
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px; /* Rounded corners */
  font-size: 1rem; /* Appropriate font size for readability */
  cursor: pointer; /* Cursor indication for interaction */
  transition: background-color 0.2s; /* Transition for a hover effect */

  &:hover {
    background-color: #297ab1; /* Slightly darker shade on hover */
  }
`;

/* Style enhancements for input and textarea for a cohesive look */
const Input = styled.input`
  width: 90%; /* Control width for consistency */
  padding: 10px;
  margin: 5px 0; /* Margin for spacing */
  border: 1px solid #ccc; /* Subtle border */
  border-radius: 5px; /* Rounded corners for inputs */
`;

const Textarea = styled.textarea`
  width: 90%; /* Consistent width with Input */
  padding: 10px;
  margin: 5px 0; /* Consistent margin for spacing */
  border: 1px solid #ccc;
  border-radius: 5px; /* Rounded corners */
  height: 100px; /* Fixed height for text area */
=======
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
>>>>>>> f46b9bd67aeac16318d79f1e8fdd1647720f3a77
`;
