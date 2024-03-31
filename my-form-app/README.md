
## IVOverflow project

# Important notes:
1. All work was done with github , its open to see all the commits i did during this work and all the changes i did (and what time i worked on this :-)
2. I worked with branches to be organized, merged PR only after i was sure they didn't break things.
3. I upgraded the CSS at the last step, theres a branch named "first-styling" of prior styling as requested in the instructions
4. in order to check this program there's a setup of DB that is needed (MongoDB) for ease of use i did a video to see the worked that was done : [click here for video](https://youtu.be/B1fVwyAh-_0)
5. 

# Tasks Done: 

1. ~~Create database~~
2. ~~Create login page with form~~
3. ~~Create login service~~
4. ~~Create question from~~
5. ~~Submit form to database~~
6. ~~Create question page~~
7. ~~Add question categories~~
8. ~~Add answer form~~
9. ~~Submit form to database~~
10. ~~Add answer voting~~ (Needs improvement)

# Things i would do if i had more time:
1. Filter topics with the input bar in the navbar
2. disabling register when logged in
3. modal popup bug when on an open ticket

# Images


![alt text](https://i.ibb.co/jrYrrs3/Screenshot-2024-03-31-at-6-42-25.png)
![alt text](https://i.ibb.co/QYGwRmc/Screenshot-2024-03-31-at-6-41-50.png)
![alt text](https://i.ibb.co/XYbNZ4S/Screenshot-2024-03-31-at-5-54-46.png)
![alt text](https://i.ibb.co/RNnk6SK/Screenshot-2024-03-31-at-5-54-35.png)



# Overview

This project is a full-stack web application designed to facilitate a question-and-answer platform where users can ask questions, provide answers, and vote on the answers they find most helpful. It features a robust authentication system, categorized questions, and an interactive voting system.

## Features

- User Authentication: Secure login page with form validation to ensure data integrity.
- Question Submission: Users can submit questions through a dedicated form. Questions are organized into categories for easy navigation.
- Answer Submission: For each question, users can submit answers. A separate form is available for answer submission.
- Database Integration: Both questions and answers are stored in a database, ensuring persistence and easy retrieval.
- Question Categories: Questions are categorized, allowing users to easily find or browse questions in specific categories.
- Voting System: Users can vote on answers, helping to highlight the most useful or accurate responses.

## Technology Stack

List the technologies, languages, frameworks, and databases used in your project.

Frontend: NextJS 14, ReactJS
Backend: [Your backend technologies]
Database: MongoDB
Authentication: Next-Auth

## Setup Instructions

Usage
Explain how users can use your application. This could include creating an account, logging in, submitting questions, answering questions, and voting.

Creating an Account and Logging In
How users can create an account.
Steps for logging in through the login page.
Submitting Questions
Instructions on how to submit a question using the question form.
Answering Questions
How users can find questions to answer and submit their answers.
Voting on Answers
Explanation of the voting system and how users can vote on answers.

## File Structure

```
app
├── Providers.js
├── api
│ ├── auth
│ │ └── [...nextauth]
│ │ └── route.js
│ ├── login
│ │ └── route.js
│ ├── register
│ │ └── route.js
│ └── topics
│ ├── [id]
│ │ └── route.js
│ └── route.js
├── dashboard
│ └── page.jsx
├── favicon.ico
├── globals.css
├── layout.js
├── page.js
├── page.module.css
├── question
│ └── [id]
│ └── page.jsx
├── register
│ └── page.jsx
└── registry.js
```
