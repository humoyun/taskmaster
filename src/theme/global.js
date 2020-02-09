import { darken } from "polished";

// Set main theme variables
export const themeMain = {
  white: "#FFFFFF",
  black: "#333333",
  grey: "#eeeeee",
  darkGrey: "#bbb",
  blue: "#488ED8",
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

  .auth-text {
    color: #929ba3;
    font-size: 0.9rem;
  }
`;

// const AuthWrapper = styled.div``;

export { AuthPage };
