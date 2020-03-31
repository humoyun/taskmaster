import React from "react";
import styled from "styled-components";
import { FlexCenter } from "@/common/ui";
import { darken, lighten } from "polished";

const authPageBgPatternURL = "/assets/bg-pattern.png";

// Set main theme variables
export const themeMain = {
  black: "#333",
  grey: "#eee",
  lightGrey: "#929ba3;",
  darkGrey: "#bbb",
  blue: "#488ed8",
  green: "#52C989",
  mainColor: "#369aff"
};

const AuthLayoutWrapper = styled(FlexCenter)`
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

const AuthLayout = props => {
  return <AuthLayoutWrapper className="">{props.children}</AuthLayoutWrapper>;
};

export default AuthLayout;
