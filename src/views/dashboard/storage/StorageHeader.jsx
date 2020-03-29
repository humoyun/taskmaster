import React from "react";
import { Button, Icon } from "antd";
import styled from "styled-components";

const Header = styled.div`
  flex: 3;

  .title {
    color: "#6b7d99";
    font-size: 1.5em;
    font-weight: bold;
  }

  .info {
    color: #ccc;
  }
`;

const Actions = styled.div`
  flex: 1;

  button {
    margin: 5px;
    padding: 2px 6px;
    font-size: 1.2em;
  }
`;

function StorageHeader() {
  return (
    <div className="storage-header">
      <Header>
        <div className="title">Internal Storage</div>
        <div className="info">9 folders, 13 files</div>
      </Header>

      <Actions className="storage-actions">
        <Button>
          <Icon type="download" theme="outlined" />
        </Button>
        <Button>
          <Icon type="delete" theme="outlined" />
        </Button>
        <Button>
          <Icon type="info-circle" theme="outlined" />
        </Button>
        <Button>
          <Icon type="plus-circle" theme="outlined" />
        </Button>
        <Button>
          <Icon type="form" theme="outlined" />
        </Button>
      </Actions>
    </div>
  );
}

export default StorageHeader;
