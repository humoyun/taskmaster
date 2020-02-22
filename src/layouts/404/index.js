import React from "react";
import { Link, withRouter} from "react-router-dom";
import { Result, Button } from 'antd';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #fafafa;
`;

const NotFound = props => {
  console.log("not found match ", props.match);
  console.log("not found location ", props.location);
  console.log("not found history ", props.history);

  return (
    <Wrapper>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={<Button type="primary"><Link to="/">Go to Dashboard</Link></Button>}
      />
    </Wrapper>
  );
};

export default withRouter(NotFound);
