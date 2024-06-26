"use client";

import styled from "styled-components";
import Link from "next/link";
import LoginForm from "../../components/LoginForm";

export default function Home() {
  return (
    <Main>
      <LoginForm />
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
