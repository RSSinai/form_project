"use client";

import NavBar from "../../../components/NavBar";
import UserQuestionsModal from "../../../components/UserQuestionModal";
import { React, useState } from "react";
export default function Dashboard() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <NavBar setOpenModal={setOpenModal} />
      <UserQuestionsModal
        open={openModal}
        onClose={() => setOpenModal(false)}
      />
    </>
  );
}
