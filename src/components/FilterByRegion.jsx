import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

const FilterByRegionStyled = styled.select`
  padding: 1.3em;
  border: none;
  outline: 0;
  border-radius: 5px;
  box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.05);
`;

const filterByRegionAction = (regionSelected) => {
  return {
    type: "FILTER_BY_REGION",
    payload: { regionSelected },
  };
};

function FilterByRegion() {
  const dispatch = useDispatch();
  // const filterByRegion = useSelector((state) =>);
  return <FilterByRegionStyled></FilterByRegionStyled>;
}

export default FilterByRegion;
