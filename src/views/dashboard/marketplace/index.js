import React from "react";
import { Empty } from "antd";
import styled from "styled-components";
import "./style.less";

const EmptyWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Marketplace = props => {
  const list = [];

  return (
    <div className="marketplace-wrapper">
      {list.length ? (
        <div>
          <h2>Marketplace for addons</h2>

          {[].map(item => (
            <div>item</div>
          ))}
        </div>
      ) : (
        <EmptyWrapper>
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
        </EmptyWrapper>
      )}
    </div>
  );
};

export default Marketplace;
