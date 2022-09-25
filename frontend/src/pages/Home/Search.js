import React, { useState } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";
import styled from "styled-components";

export default function Search() {
  // Filter search
  const [filter, setFilter] = useState("");

  const searchText = (e) => {
    setFilter(e.target.value);
  };

  // Clear search
  const clearInput = () => {
    setFilter("");
  };

  return (
    <Container>
      <div className="search_bar">
        <button className="search">
          <FaSearch />
        </button>
        <input
          type="text"
          placeholder=" Search"
          value={filter}
          onChange={searchText.bind(this)}
        />
        <button className="delete" onClick={clearInput}>
          <FaTimes />
        </button>
      </div>
    </Container>
  );
}

// styling
const Container = styled.div`
  .search_bar {
    width: 100%;
    margin: 0.5rem;
    display: flex;
    justify-content: center;
  }
  input {
    width: 100%;
    max-width: 30rem;
    padding: 0.75rem;
    margin: 0 0.5rem;
    border-radius: 0.5rem;
  }
  button {
    font-size: 1rem;
    font-weight: bold;
    min-width: 3rem;
    margin: 0 0.25rem;
    padding: 0.75rem;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
  }
  .search {
    background-color: var(--searchBtn);
  }
`;
