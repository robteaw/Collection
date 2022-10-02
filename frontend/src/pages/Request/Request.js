import React from "react";
import styled from "styled-components";
import Form from "./Form";

export default function Request() {
  return (
    <Container>
      <h1>Request</h1>
      <p>
        {/* Choose a movie that you are interested in from the dropdown list and
        provide a time of day. */}
        Provide a name, email and any movie request below. I will get back to
        you as soon as possible.
      </p>
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
