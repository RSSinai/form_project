"use client";
import styled from "styled-components";
import NavBar from "../../../components/NavBar";
import QuestionList from "../../../components/QuestionList";
import UserQuestionsModal from "../../../components/UserQuestionModal";
import { React, useState } from "react";
import { useSession, signIn } from "next-auth/react";

export default function Dashboard() {
  const [openModal, setOpenModal] = useState(false);
  const { data: session, status } = useSession();
  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (!session) {
    return (
      <div>
        <p>You must be signed in to view this page</p>
        <button onClick={() => signIn()}>Sign in</button>
      </div>
    );
  }
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
