import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import Country from "./Country";

const CountryListStyled = styled.div`
  display: grid;
  grid-row-gap: 2.3em;
  justify-content: center;
  background: var(--background);
  padding: 4em 2em;
`;

function CountryList() {
  const dispatch = useDispatch();
  const countryListByName = useSelector((state) => state.countryListByName);
  const countryList = useSelector((state) => {
    if (state.filterByRegion !== "" && countryList.length === 0) {
      return state.filterByRegion;
    }

    if (countryListByName.length > 0) {
      return countryListByName;
    }

    return state.countryList;
  });

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: "SET_COUNTRY_LIST",
          payload: data,
        });
      })
      .catch(() => {
        console.log("Hubo un error al obtener los países");
      });
  }, [dispatch]);
  return (
    <CountryListStyled>
      {countryList &&
        countryList.map((country, index) => (
          <Country
            key={index}
            flag={country.flag}
            name={country.name}
            population={country.population}
            region={country.region}
            capital={country.capital}
          />
        ))}
    </CountryListStyled>
  );
}

export default CountryList;
