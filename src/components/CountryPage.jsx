import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

// Components imports
import Wrapper from "./Wrapper";
import CountrySelected from "./CountrySelected";

const CountryPageStyled = styled.div`
  .back {
    background: var(--white);
    color: var(--black);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    padding: 0.7em 2.2em;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    margin-top: 1em;

    i {
      margin-right: 5px;
    }
  }

  @media screen and (min-width: 1024px) {
    .back {
      margin-top: 3em;
    }
  }
`;

function CountryPage({ match, history }) {
  const storageCountry = useSelector((state) =>
    state.countryList.find(
      (item) => item.alpha2Code === match.params.id.replace(/-/g, "")
    )
  );
  const [country, setCountry] = useState(storageCountry);

  useEffect(() => {
    if (!country) {
      fetch(
        `https://restcountries.eu/rest/v2/alpha/${match.params.id.toLowerCase()}`
      )
        .then((response) => response.json())
        .then((data) => setCountry(data))
        .catch(() =>
          console.log(
            `Hubo un error al obtener los datos de ${match.params.id}`
          )
        );
    }
  }, [country, match.params.id]);

  function handleClick() {
    history.goBack();
  }
  return (
    <CountryPageStyled>
      <Wrapper>
        <button className="back" onClick={handleClick}>
          <i className="fas fa-long-arrow-alt-left"></i>
          Back
        </button>
        <CountrySelected {...country} />
      </Wrapper>
    </CountryPageStyled>
  );
}

export default CountryPage;
