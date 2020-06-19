import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Components imports
import Wrapper from "./Wrapper";

const HeaderStyled = styled.div`
  background: var(--white);
  margin-bottom: 1em;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.06);

  .content {
    display: flex;
    justify-content: space-between;
    height: 80px;
    align-items: center;
  }

  a {
    text-decoration: none;
    color: var(--dark);
  }

  h1 {
    font-size: 14px;
  }

  .dark-mode {
    cursor: pointer;

    .moon {
      display: inline-flex;
      transform: rotate(-25deg);
      margin-right: 10px;
    }

    p {
      font-size: 12px;
      font-weight: 600;
    }
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 3em;

    h1 {
      font-size: 24px;
    }

    .dark-mode {
      p {
        font-size: 1rem;
      }
    }
  }
`;

function Header({ setDarkMode, darkMode }) {
  function handleClick() {
    setDarkMode(!darkMode);
  }
  return (
    <HeaderStyled>
      <Wrapper>
        <div className="content">
          <Link to="/">
            <h1>Where in the world?</h1>
          </Link>
          <div className="dark-mode">
            <p onClick={handleClick}>
              <span className="moon">
                {darkMode ? (
                  <i className="fas fa-moon"></i>
                ) : (
                  <i className="far fa-moon"></i>
                )}
              </span>
              Dark mode
            </p>
          </div>
        </div>
      </Wrapper>
    </HeaderStyled>
  );
}

export default Header;
