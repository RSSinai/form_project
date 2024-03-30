import React, { useEffect, useState } from "react";
import Link from "next/link";
import styled from "styled-components";

export default function TopicsList() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/topics", {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("Failed to fetch topics");
        }

        const data = await res.json();
        setTopics(data.topics);
      } catch (error) {
        console.log("Error loading topics: ", error);
      }
    };

    fetchTopics();
  }, []);

  return (
    <>
      <Container>
        {topics.map((topic) => (
          <div key={topic._id}>
            <Topic>
              <SideInfo>Numbers</SideInfo>
              <Content>
                <div>Title: {topic.title}</div>
                <div>Question: {topic.description}</div>
                <div>Tags: {topic.tags}</div>
                <Link href={`./question/${topic._id}`}>Open</Link>
              </Content>
              <Stamp>Author: </Stamp>
            </Topic>
          </div>
        ))}
      </Container>
    </>
  );
}

const Topic = styled.div`
  border: 1px solid;
  display: flex;
  flex-direction: row;
  height: 150px;
  justify-content: space-between;
`;

const SideInfo = styled.div`
  border: 1px solid;
`;

const Content = styled.div`
  width: 80%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  width: 70%;
  padding: 20px;
  box-sizing: border-box;
`;

const Stamp = styled.div`
  border: 1px solid;
`;
