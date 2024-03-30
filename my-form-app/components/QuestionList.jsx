import React, { useEffect, useState } from "react";
import Link from "next/link";
import styled from "styled-components";

const Topic = styled.div`
  border: 1px solid;
  width: 100%;
`;

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
      {topics.map((topic) => (
        <div key={topic._id}>
          <Topic>
            <div>{topic.title}</div>
            <div>{topic.description}</div>
            <Link href={"./"}>Open</Link>
            <div>{topic.tags}</div>
          </Topic>
        </div>
      ))}
    </>
  );
}
