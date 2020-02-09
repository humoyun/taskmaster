import styled from "styled-components";

const LoginWrapper = styled.div`
  display: flex;

  background-image: url("/assets/bg-pattern.png");
  background-color: #6658dd;

  .login-text {
    font-size: 0.9rem;
  }
`;

const FormHeader = styled.div`
  width: 100%;
  height: 100px;
`;

const FormFooter = styled.div`
  width: 100%;
  height: 75px;
  color: #929ba3;
`;

const LoginFooter = styled.div`
  width: 400px;
  height: 50px;
  color: #d4d7d9;
`;

const SocialIcons = styled.div`
  margin: 0 auto;
  width: 200px;
  display: flex;
  justify-content: space-evenly;
`;

const SocialIcon = styled.div`
  width: 30px;
  height: 30px;
  font-size: 1.2em;
  border: 2px solid ${props => (props.color ? props.color : "#ccc")};
  border-radius: 50%;
  color: ${props => (props.color ? props.color : "#ccc")};
  cursor: pointer;

  &:hover {
    background: #f5f5f1;
  }
`;

export { LoginWrapper, FormHeader, FormFooter, SocialIcons, SocialIcon };
