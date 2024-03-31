"use client";

import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const Router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res.error) {
        setError("Invalid Credentials");
        return;
      }

      Router.replace("dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Container>
        <Logo>LOGO</Logo>
        <h1>IVOverflow</h1>
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Softer shadow for a modern look */
  border-radius: 8px; /* Rounded corners for the container */
  gap: 20px; /* Increased gap for better spacing */
  padding: 40px; /* Increased padding for more breathing space */
  background-color: #ffffff; /* Light background for contrast */
  max-width: 400px; /* Maximum width for form container */
  width: 100%; /* Ensure it's responsive */
  margin: auto; /* Center the form on the page */
`;

const Logo = styled.div`
<<<<<<< HEAD
  height: 60px; /* Adjusted size for visibility */
  width: 60px; /* Maintain aspect ratio */
  background-color: #3498db; /* Theme color for consistency */
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%; /* Circular logo */
  font-size: 24px; /* Adjusted font size for logo text */
  color: white; /* Logo text color */
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px; /* Increased gap for clarity */
  width: 90%; /* Adjust width for form control */
  max-width: 300px; /* Maximum width to ensure form elements are not too wide */
`;

const Input = styled.input`
  padding: 10px; /* Padding for better text visibility */
  border: 1px solid #ccc; /* Subtle border */
  border-radius: 5px; /* Rounded corners for input fields */
  width: calc(100% - 20px); /* Adjust width to account for padding */
`;

const Button = styled.button`
  background-color: #3498db; /* Theme color for consistency */
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer; /* Cursor indication for interaction */
  transition: background-color 0.2s; /* Smooth transition for hover effect */

  &:hover {
    background-color: #297ab1; /* Darker shade on hover for interaction feedback */
  }
`;

const Error = styled.div`
  color: white; /* Text color for visibility */
  background-color: #e74c3c; /* Error indication color */
  padding: 10px; /* Padding for text */
  border-radius: 5px; /* Rounded corners for soft appearance */
  width: 90%; /* Responsive width */
  max-width: 300px; /* Maximum width to match form elements */
  text-align: center; /* Center text for better readability */
=======
  height: 50px;
  width: 50px;
  background-color: grey;
  display: flex;
  justify-content: center;
  align-items: center;
>>>>>>> f46b9bd67aeac16318d79f1e8fdd1647720f3a77
`;
