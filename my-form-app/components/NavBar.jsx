"use client";
import Link from "next/link";
import styled from "styled-components";
import { signOut } from "next-auth/react";

export default function NavBar({ setOpenModal }) {
  return (
    <>
      <Container>
<<<<<<< HEAD
        <Logo>
          <Link href="/dashboard">LOGO</Link>
        </Logo>
=======
        <Logo>LOGO</Logo>
>>>>>>> f46b9bd67aeac16318d79f1e8fdd1647720f3a77
        <Search>
          <Input placeholder="Search"></Input>
          <button onClick={() => setOpenModal(true)}>Ask Question!</button>
        </Search>
        <button onClick={() => signOut({ callbackUrl: "/" })}>Logout</button>
      </Container>
    </>
  );
}
<<<<<<< HEAD
const Container = styled.div`
  background-color: #f4f7fa; /* Light background for the navbar */
  height: 60px; /* Increased height for better proportion */
=======
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
>>>>>>> f46b9bd67aeac16318d79f1e8fdd1647720f3a77
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
<<<<<<< HEAD
  padding: 0 20px; /* Padding on the sides for breathing space */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Softer shadow for subtlety */
`;

const Logo = styled.div`
  background-color: #3498db; /* A nice shade of blue for the logo background */
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2em; /* Larger font size for the logo */
  padding: 0 20px; /* Padding for the logo for better visibility */
  border-radius: 5px; /* Rounded corners for a modern look */
  cursor: pointer; /* Change cursor to pointer to indicate it's clickable */
`;

const Search = styled.div`
  width: 60%; /* Adjusted width to not overwhelm the navbar */
  display: flex;
  align-items: center;
  justify-content: space-evenly; /* Even spacing for input and button */
`;

const Input = styled.input`
  width: 80%; /* More room for typing */
  padding: 10px; /* Padding for better text visibility */
  border: 1px solid #cccccc; /* Subtle border */
  border-radius: 5px; /* Rounded corners for the input field */
  font-size: 1em; /* Readable font size */
`;

// Button styles are applied globally for consistency
const Button = styled.button`
  background-color: #3498db; /* Matching the logo color */
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer; /* Indicates it's clickable */
  font-size: 1em;
  transition: background-color 0.3s; /* Smooth transition for hover effect */

  &:hover {
    background-color: #297ab1; /* Slightly darker shade on hover */
  }
=======
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
>>>>>>> f46b9bd67aeac16318d79f1e8fdd1647720f3a77
`;
