import React from "react";
import styled from "styled-components";
import FolderIcon from "@/icons/files/folder-yellow.svg";
import "./style.less";

const FileItem = styled.div`
  display: flex;
  align-items: center;
  width: 350px;
  height: 50px;
  padding: 1px;
  background-color: #fff;
  border-radius: 3px;
  font-size: 10px;
  color: #c7c7c7;
  font-weight: 600;
  transition: all 0.5s;
  box-sizing: border-box;
  border: 1px solid #f0f4ff;
  cursor: pointer;

  &:hover {
    border: 1px solid #4d7cff;
  }
`;

const LeftBox = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #fff;
  border-radius: 3px;
`;

const CenterBox = styled.div`
  flex: 5;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const RightBox = styled.div`
  flex: 3;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Storage() {
  return (
    <div className="tm-cloud-storage">
      <h2 style={{ color: "#6b7d99" }}>Storage for assets</h2>
      <div>
        <FileItem>
          <LeftBox>
            <FolderIcon style={{ width: "22px" }}></FolderIcon>
          </LeftBox>
          <CenterBox>
            <div style={{ fontSize: 14, color: "#444" }}>Documents</div>
            <div>22 files, 23 Mb</div>
          </CenterBox>
          <RightBox>
            <span>October 17, 2019</span>
          </RightBox>
        </FileItem>
      </div>
    </div>
  );
}
