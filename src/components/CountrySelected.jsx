import React from "react";
import styled from "styled-components";

const CountrySelectedStyled = styled.div`
  margin-top: 3em;
  padding-bottom: 3em;

  img {
    width: 100%;
    margin-bottom: 2em;
  }

  .grid {
    display: grid;
    grid-row-gap: 1em;
  }

  .border-item {
    padding: 0.5em 2em;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    margin-right: 15px;
    display: inline-flex;
    margin-bottom: 15px;
    background: var(--white);
  }

  .languages {
    span {
      margin-right: 5px;

      &:after {
        content: ",";
      }
      &:last-child {
        &:after {
          display: none;
        }
      }
    }
  }

  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 120px;
    margin-top: 5em;
    .grid {
      grid-template-columns: 1fr 1fr;
    }

    .borders {
      display: inline-flex;
      margin-right: 1em;
      margin-top: 3.5em;
    }
  }
`;

function CountrySelected({
  flag,
  name,
  nativeName,
  population,
  region,
  subRegion,
  capital,
  topLevelDomain,
  currencies = [],
  languages = [],
  borders = [],
}) {
  return (
    <CountrySelectedStyled>
      <img loading="lazy" src={flag} alt={name} />
      <div>
        <h2>{name}</h2>
        <div className="grid">
          <div>
            <p>
              <strong>Native name:</strong> {nativeName}
            </p>
            <p>
              <strong>Population:</strong> {population}
            </p>
            <p>
              <strong>Region:</strong> {region}
            </p>
            <p>
              <strong>Sub Region:</strong> {subRegion}
            </p>
            <p>
              <strong>Capital:</strong> {capital}
            </p>
          </div>
          <div>
            <p>
              <strong>Top level domain:</strong> {topLevelDomain}
            </p>
            <p>
              <strong>Currencies:</strong>&nbsp;
              {currencies &&
                currencies.map((currency) => <span>{currency.name}</span>)}
            </p>
            <p className="languages">
              <strong>Languages:</strong>&nbsp;
              {languages &&
                languages.map((language) => <span>{language.name}</span>)}
            </p>
          </div>
        </div>
        <p className="borders">
          <strong>Border Countries:</strong>
        </p>
        {borders &&
          borders.map((border) => (
            <span className="border-item">{border}</span>
          ))}
      </div>
    </CountrySelectedStyled>
  );
}

export default CountrySelected;
