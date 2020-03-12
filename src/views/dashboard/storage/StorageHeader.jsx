import React from "react";
import { Button, Icon } from "antd";

function StorageHeader() {
  return (
    <div className="storage-header">
      <h3 style={{ color: "#6b7d99" }}>Storage for assets</h3>
      <div>9 folders, 13 files</div>

      <div>
        <Button size="small">
          <Icon type="download" theme="outlined" />
        </Button>
        <Button size="small">
          <Icon type="delete" theme="outlined" />
        </Button>
        <Button size="small">
          <Icon type="info-circle" theme="outlined" />
        </Button>
        <Button size="small">
          <Icon type="plus-circle" theme="outlined" />
        </Button>
        <Button size="small">
          <Icon type="form" theme="outlined" />
        </Button>
      </div>
    </div>
  );
}

export default StorageHeader;
