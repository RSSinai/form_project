"use client";
import styled from "styled-components";

import NavBar from "../../../components/NavBar";
import QuestionList from "../../../components/QuestionList";
import UserQuestionsModal from "../../../components/UserQuestionModal";
import { React, useState } from "react";
export default function Dashboard() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <NavBar setOpenModal={setOpenModal} />
      <Container>
        <UserQuestionsModal
          open={openModal}
          onClose={() => setOpenModal(false)}
        />
        <QuestionList />
      </Container>
    </>
  );
}

const Container = styled.div``;
