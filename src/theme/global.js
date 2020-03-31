import styled from "styled-components";
import { FlexCenter } from "@/common/ui";
import { darken, lighten } from "polished";

// Set main theme variables
export const themeMain = {
  white: "#fff",
  black: "#333",
  grey: "#eee",
  lightGrey: "#929ba3;",
  darkGrey: "#bbb",
  blue: "#488ed8",
  yellow: "yellow",
  green: "#52C989",
  red: "red",
  mainColor: "#369aff"
};

const authPageBgPatternURL = "/assets/bg-pattern.png";

const AuthPage = styled(FlexCenter)`
  width: 100%;
  height: 100vh;
  flex-direction: column;
  background-image: url(${authPageBgPatternURL});
  background-color: ${themeMain.mainColor};
  color: ${themeMain.lightGrey};
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
