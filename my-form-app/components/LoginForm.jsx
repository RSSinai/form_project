import styled from "styled-components";
import Link from "next/link";

export default function LoginForm() {
  return (
    <>
      <Container>
        <h1>Enter the details</h1>
        <Form>
          <Input type="text" placeholder="email" />
          <Input type="password" placeholder="password" />
          <button>Login</button>
        </Form>
        <Error>Error message</Error>
        <Link href={"/register"}> Register</Link>
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
