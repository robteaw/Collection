import React from "react";
import styled from "styled-components";
import Movie from "./Movie";

export default function Home() {
  return (
    <Container>
      <p>Home</p>
      <Movie />
    </Container>
  );
}

// styling
const Container = styled.div`
  height: 100vh;
  padding: 8rem 15%;
`;
