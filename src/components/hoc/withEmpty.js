import React from "react";
import { Empty } from "antd";
import styled from "styled-components";

const EmptyWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const withEmpty = (Component, title) => {
  return ({ isEmpty, ...props }) => {
    if (isEmpty)
      return (
        <EmptyWrapper>
          <Empty
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            description={title ? title : "No Data"}
          />
        </EmptyWrapper>
      );

    return <Component {...props} />;
  };
};

export default withEmpty;
