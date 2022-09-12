import React from "react";
import styled from "styled-components";
import Movie from "./Movie";

export default function Home() {
  return (
    <Container>
      <InnerContainer>
        <Movie />
      </InnerContainer>
    </Container>
  );
}

// styling
const Container = styled.div`
  min-height: 100vh;
  height: 100%;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto 5rem auto;
  padding: 8rem 15%;
`;

const InnerContainer = styled.div`
  .card_container {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 5rem;
    .card {
      width: 100%;
    }
    h3 {
      color: var(--headColor);
      white-space: nowrap;
    }
    p {
      color: var(--textColor);
      margin-bottom: 1rem;
    }
    img {
      height: 15rem;
      width: 11.5rem;
    }
  }
  .add_data {
    margin: 5rem 0;
    display: flex;
    justify-content: center;
    input {
      padding: 0.75rem;
      margin: 0 0.5rem;
      border-radius: 0.5rem;
    }
    img {
      height: 2.5rem;
      margin: 0 0.5rem;
      cursor: pointer;
    }
  }
`;
