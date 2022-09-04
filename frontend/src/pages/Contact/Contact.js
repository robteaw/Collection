import React from "react";
import styled from "styled-components";
import Form from "./Form"

export default function Contact() {
  return (
    <Container>
      <h1>Contact</h1>
      <p>If you have any questions or suggestions, feel free to leave a message. Also if there are any movie(s) you would like to see, choose a movie from the list in the dropdown.</p>
      <Form />
    </Container>
  );
}

// styling
const Container = styled.div`
  height: 100vh;
  padding: 8rem 15%;
  p {
    margin-bottom: 1.5rem;
  }
`;
