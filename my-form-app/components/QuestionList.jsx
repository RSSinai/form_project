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
<<<<<<< HEAD
              <SideInfo>0</SideInfo>
=======
              <SideInfo>Numbers</SideInfo>
>>>>>>> f46b9bd67aeac16318d79f1e8fdd1647720f3a77
              <Content>
                <div>Title: {topic.title}</div>
                <div>Question: {topic.description}</div>
                <TagsContainer>
                  Tags:
                  {topic.tags.map((tag, index) => (
                    <Tag key={index}>{tag}</Tag>
                  ))}
                </TagsContainer>
<<<<<<< HEAD
                <Link href={`./question/${topic._id}`}>Open topic</Link>
              </Content>
              <Stamp>Date: {topic.createdAt} </Stamp>
=======
                <Link href={`./question/${topic._id}`}>Open</Link>
              </Content>
              <Stamp>Author: </Stamp>
>>>>>>> f46b9bd67aeac16318d79f1e8fdd1647720f3a77
            </Topic>
          </div>
        ))}
      </Container>
    </>
  );
}

const Topic = styled.div`
<<<<<<< HEAD
  border: 1px solid #e1e1e1; /* Lighter border color for a softer look */
  display: flex;
  flex-direction: row;
  height: auto; /* Allow the height to adjust based on content */
  justify-content: space-between;
  padding: 15px; /* Add padding for internal spacing */
  margin-bottom: 10px; /* Add margin for spacing between topics */
  border-radius: 8px; /* Rounded corners for a modern look */
  background-color: #f9f9f9; /* Slight background color for contrast */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Soft shadow for depth */
`;

const SideInfo = styled.div`
  border-right: 1px solid #e1e1e1; /* Define a right border for separation */
  width: 10%; /* Adjust width for better balance */
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 0 15px; /* Padding for internal spacing */
`;

const Content = styled.div`
  width: 85%; /* Adjusted width for balance */
  margin: 0 10px; /* Adjust margins for spacing */
  overflow: hidden; /* Hide overflow */
=======
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
>>>>>>> f46b9bd67aeac16318d79f1e8fdd1647720f3a77
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
<<<<<<< HEAD
  width: 80%; /* Adjust width for a better fit */
  max-width: 960px; /* Max width for large screens */
=======
  width: 70%;
>>>>>>> f46b9bd67aeac16318d79f1e8fdd1647720f3a77
  padding: 20px;
  box-sizing: border-box;
`;

const Stamp = styled.div`
<<<<<<< HEAD
  font-size: 0.8rem; /* Smaller font size for subtlety */
  color: #707070; /* Soft color for the stamp */
  margin: 0 10px; /* Adjust margin for alignment */
=======
  border: 1px solid;
>>>>>>> f46b9bd67aeac16318d79f1e8fdd1647720f3a77
`;

const Tag = styled.div`
  background-color: #3498db;
  color: #fff;
<<<<<<< HEAD
  padding: 5px 10px; /* Adjust padding for better readability */
  border-radius: 5px;
  font-size: 0.8rem; /* Smaller font size for a refined look */
=======
  padding: 3px 8px;
  border-radius: 5px;
>>>>>>> f46b9bd67aeac16318d79f1e8fdd1647720f3a77
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
<<<<<<< HEAD
  gap: 10px; /* Increased gap for better separation */
  margin-top: 10px; /* Top margin for spacing from content */
=======
  gap: 5px;
>>>>>>> f46b9bd67aeac16318d79f1e8fdd1647720f3a77
`;
