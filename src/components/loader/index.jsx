import React from "react";
import { Spin } from "antd";
import styled from "styled-components";
import { FlexCenter } from "@/common/ui";

const Wrapper = styled(FlexCenter)`
  width: 100%;
  height: 100%;
`;

const Loader = () => {
  return (
    <Wrapper className="tm-spinner">
      <Spin tip="...Loading" size="large"></Spin>
    </Wrapper>
  );
};

export { Loader };
