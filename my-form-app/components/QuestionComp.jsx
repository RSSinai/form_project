import React from "react";
import styled from "styled-components";

const QuestionComp = () => {
  return (
    <div>
      <PageWrapper>
        <ModalContainer>
          <h2>Question title</h2>
          <h4>asked by date by name</h4>
          <HR />
          <input></input>
          <div> Topic Description</div>
          <textarea></textarea>
          <div>Tags separated by ,</div>
          <input></input>
          <Submit>Submit</Submit>
        </ModalContainer>
      </PageWrapper>
    </div>
  );
};

export default QuestionComp;

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
