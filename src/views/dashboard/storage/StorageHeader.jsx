import React from "react";
import { Button, Icon, Popconfirm } from "antd";
import styled from "styled-components";
import { connect } from "react-redux";
import { selectFile } from "@/store/actions/storage";

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

const StorageHeader = props => {
  const handleDelete = e => {
    console.log("handleDelete: ", e);
    props.selectFile(null);
  };

  return (
    <div className="storage-header">
      <Header>
        <div className="title">Internal Storage</div>
        <div className="info">9 folders, 13 files</div>
      </Header>

      <Actions className="storage-actions">
        <Button>
          <Icon type="upload" theme="outlined" />
        </Button>
        <Button>
          <Icon type="download" theme="outlined" />
        </Button>

        <Popconfirm
          title="Are you sure delete this file?"
          okText="Yes"
          cancelText="No"
          onConfirm={handleDelete}
          disabled={!props.currentFile}
        >
          <Button disabled={!props.currentFile}>
            <Icon type="delete" theme="outlined" />
          </Button>
        </Popconfirm>

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
};

const mapStateToProps = state => ({ currentFile: state.drive.currentFile });
const actionCreators = {
  selectFile
};
export default connect(mapStateToProps, actionCreators)(StorageHeader);
