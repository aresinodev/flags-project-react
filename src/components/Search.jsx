import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

// Components imports
import Input from "./Input";

const SearchStyled = styled.div`
  display: flex;
  position: relative;

  .close {
    position: absolute;
    right: 1em;
    top: 1em;
    border-radius: 50%;
    border: none;
    box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.05);
    cursor: pointer;
  }
`;

function Search() {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const filterByName = (event) => {
    setInputValue(event.target.value);
    dispatch({
      type: "SET_COUNTRY_BY_NAME",
      payload: event.target.value,
    });
  };

  const clearInput = () => {
    dispatch({
      type: "SET_COUNTRY_BY_NAME",
      payload: "",
    });

    setInputValue("");
  };

  return (
    <SearchStyled>
      {inputValue && (
        <i className="close fas fa-times" onClick={clearInput}></i>
      )}
      <Input
        placeholder="Search for a country..."
        value={inputValue}
        onChange={filterByName}
      />
    </SearchStyled>
  );
}

export default Search;
