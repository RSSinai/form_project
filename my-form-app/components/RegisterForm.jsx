"use client";

import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const [name, setName] = useState("");
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Softer, modern shadow */
  border-radius: 8px; /* Rounded corners */
  gap: 20px; /* Increased gap for clarity */
  padding: 40px; /* More breathing space */
  background-color: #ffffff; /* Clean white background */
  max-width: 400px; /* Optimal form width */
  width: 100%; /* Responsive */
  margin: auto; /* Centered on page */
`;

const Input = styled.input`
  padding: 10px; /* Comfortable text input */
  border: 1px solid #ccc; /* Subtle, stylish border */
  border-radius: 5px; /* Rounded edges */
  width: calc(100% - 20px); /* Adjust width for padding */
  margin-bottom: 10px; /* Space between inputs */
`;

const Button = styled.button`
  background-color: #3498db; /* Consistent button color */
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer; /* Indicate clickable */
  transition: background-color 0.2s; /* Smooth hover effect */

  &:hover {
    background-color: #297ab1; /* Darken on hover */
  }
`;

const Error = styled.div`
  color: white; /* Error text color */
  background-color: #e74c3c; /* Alert color for errors */
  padding: 10px;
  border-radius: 5px; /* Smooth edges */
  width: 90%; /* Responsive */
  max-width: 300px; /* Match input width */
  text-align: center; /* Center error message */
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px; /* Spacing between form elements */
  width: 90%; /* Form width */
  max-width: 350px; /* Max width for larger screens */
`;
