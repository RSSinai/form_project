"use client";

import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";
import {}

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("invalid");

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
        
    } catch (error) {
        
    }
  };

  return (
    <>
      <Container>
        <h1>Log in</h1>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button>Login</button>
        </Form>
        {error && <Error>{error}</Error>}
        <Link href={"/register"}>
          Dont have an account ? <span>Register</span>
        </Link>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  flex-direction: column;
  gap: 5px;
  padding: 20px;
`;

const Input = styled.input`
  width: 100%;
`;

const Error = styled.div`
  background-color: red;
  justify-content: flex-start;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;
