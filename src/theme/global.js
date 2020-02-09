import styled from "styled-components";
import { darken, lighten } from "polished";

// Set main theme variables
export const themeMain = {
  white: "#fff",
  black: "#333",
  grey: "#eee",
  darkGrey: "#bbb",
  blue: "#488ed8",
  yellow: "yellow",
  green: "#52C989",
  red: "red"
};

const AuthPage = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-image: url("/assets/bg-pattern.png");
  background-color: #369aff;
  color: #929ba3;
  text-align: center;

  h1 {
    color: #046fdb;
  }

  .form-header-text {
    color: #929ba3;
    font-size: 0.9rem;
  }
`;

// const AuthWrapper = styled.div``;

export { AuthPage };
