"use client";
import styled from "styled-components";
import RegisterForm from "../../../components/RegisterForm";

export default function Register() {
  return (
    <Main>
      <RegisterForm />;
    </Main>
  );
}

const Main = styled.main`
  display: grid;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;
