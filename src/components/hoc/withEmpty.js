import React from "react";
import { Empty } from "antd";
import styled from "styled-components";
import { FlexCenter } from "@/common/ui";

const EmptyWrapper = styled(FlexCenter)`
  width: 100%;
  height: 100%;
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
