import React from "react";
import { Button, Icon, Popconfirm, Dropdown, Menu } from "antd";
import styled from "styled-components";
import { connect } from "react-redux";
import { selectFile } from "@/store/actions/storage";

const Header = styled.div`
  flex: 1;

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
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .single-actions {
    button {
      margin: 5px;
      padding: 2px 6px;
    }
  }
`;

const StorageHeader = ({ currentFile }) => {
  const handleDelete = (e) => {
    console.log("handleDelete: ", e);
    props.selectFile(null);
  };

  const download = () => {
    if (currentFile.type === "file")
      window.downloadFile(currentFile.url, currentFile.name);
    else console.log("folders should be downloaded as zip");
  };

  const handleActions = (action) => {
    console.log("actions: ", action);
  };
  const handleMenuClick = (action) => {
    console.log("actions: ", action);
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="edit">
        <Icon type="form" theme="outlined" /> Edit
      </Menu.Item>
      <Menu.Item key="info">
        <Icon type="info-circle" theme="outlined" /> Info
      </Menu.Item>
      <Menu.Item key="delete">
        <Icon type="delete" theme="outlined" /> Remove
      </Menu.Item>
      <Menu.Item key="rename">
        <Icon type="italic" theme="outlined" /> Rename
      </Menu.Item>
      <Menu.Item key="move">
        <Icon type="export" theme="outlined" /> Move
      </Menu.Item>
      <Menu.Item key="pin">
        <Icon type="pushpin" theme="outlined" /> Pin
      </Menu.Item>
    </Menu>
  );

  const windowWidth = 600; // for small screens should icons only

  return (
    <div className="storage-header">
      <Header>
        <div className="title">Internal Storage</div>
        <div className="info">9 folders, 13 files</div>
      </Header>

      <Actions className="storage-actions">
        <div className="single-actions">
          <Button disabled={!currentFile}>
            <Icon type="upload" theme="outlined" />{" "}
            {windowWidth >= 600 && "Upload"}
          </Button>

          <Button>
            <Icon type="plus-circle" theme="outlined" /> New Folder
          </Button>

          <Button disabled={!currentFile} onClick={download}>
            <Icon type="download" theme="outlined" /> Download
          </Button>
        </div>

        <Dropdown.Button
          onClick={handleActions}
          overlay={menu}
          trigger={["click"]}
        >
          Actions
        </Dropdown.Button>

        {/* <Popconfirm
          title="Are you sure delete this file?"
          okText="Yes"
          cancelText="No"
          onConfirm={handleDelete}
          disabled={!currentFile}
        >
          <Button disabled={!currentFile}>
            
          </Button>
        </Popconfirm> */}
      </Actions>
    </div>
  );
};

const mapStateToProps = (state) => ({ currentFile: state.drive.currentFile });
const actionCreators = {
  selectFile,
};
export default connect(mapStateToProps, actionCreators)(StorageHeader);
