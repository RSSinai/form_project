"use client";

import React, { useState } from "react";
import NavBar from "../../../../components/NavBar";
import UserQuestionsModal from "../../../../components/UserQuestionModal";
import QuestionComp from "../../../../components/QuestionComp";

const Page = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <NavBar setOpenModal={setOpenModal} />
      <UserQuestionsModal
        open={openModal}
        onClose={() => setOpenModal(false)}
      />
      <QuestionComp />
    </div>
  );
};

export default Page;
