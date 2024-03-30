"use client";
import React from "react";
import styled from "styled-components";

export default function UserQuestionsModal({ open, onClose }) {
  if (!open) {
    return null;
  }
  return (
    <PageWrapper>
      <ModalContainer>
        <h2>Ask Question</h2>
        <div>Title</div>
        <input></input>
        <div> Topic Description</div>
        <textarea></textarea>
        <div>Tags separated by ,</div>
        <input></input>
        <Submit>Submit</Submit>
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
