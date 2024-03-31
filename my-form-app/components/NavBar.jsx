"use client";
import Link from "next/link";
import styled from "styled-components";
import { signOut } from "next-auth/react";

export default function NavBar({ setOpenModal }) {
  return (
    <>
      <Container>
        <Logo>LOGO</Logo>
        <Search>
          <Input placeholder="Search"></Input>
          <button onClick={() => setOpenModal(true)}>Ask Question!</button>
        </Search>
        <button onClick={() => signOut({ callbackUrl: "/" })}>Logout</button>
      </Container>
    </>
  );
}
const Logo = styled.div`
  background-color: red;
  height: 50px;
  width: 10%;
  color: aliceblue;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  background-color: white;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const Search = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  width: 70%;
  height: 100%;
  box-sizing: border-box;
`;

const Button = styled.button`
  height: 32px;
  box-sizing: border-box;
`;
