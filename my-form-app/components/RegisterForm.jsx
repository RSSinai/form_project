"use client";

import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !password || !email) {
      setError("all Fields are required");
      return;
    }

    try {
      const resUserExists = await fetch("api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const { user } = await resUserExists.json();
      if (user) {
        setError("user already exists");
        return;
      }

      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          name,
          nickname,
          email,
          password,
        }),
      });
      if (res.ok) {
        const form = e.target;
        form.reset();
        router.push("/");
      } else {
        console.log("Userr registeration failed");
      }
    } catch (error) {}
  };

  return (
    <>
      <Container>
        <h1>Register</h1>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Full Name"
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Nickname"
            onChange={(e) => setNickname(e.target.value)}
          />
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
          <button>Register</button>
        </Form>
        {error && <Error>{error}</Error>}
        <Link href={"/"}>
          Already have an account ? <span>Register</span>
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
