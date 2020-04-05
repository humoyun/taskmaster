import React from "react";
import styled from "styled-components";
import { Progress } from "antd";

import SuccessIcon from "@/icons/misc/upload-success.svg";
import FailIcon from "@/icons/misc/upload-fail.svg";
import CircularIcon from "@/icons/misc/progress-arrow.svg";
import { FlexCenter } from "@/common/ui";
import File from "./File";

const BottomUploadBox = styled.div`
  position: absolute;
  display: inline-block;
  bottom: 0;
  width: 100%;
  height: 50px;
  padding-left: 20px;
  padding-right: 20px;
  z-index: 120;
  pointer-events: none;
  -webkit-animation: backgroundfade 0.2s linear;
  animation: backgroundfade 0.2s linear;
`;

const Uploader = styled.div`
  max-width: 500px;
  min-width: 200px;
  display: flex;
  flex-direction: column;
  height: 50px;
  margin: 0 auto;
  padding: 0 10px;
  border-radius: 3px;
  background-color: #f7f9fa;
  color: #1b2733;
  box-shadow: 0 0 0 1px rgba(99, 114, 130, 0.16),
    0 8px 16px rgba(27, 39, 51, 0.08);
`;

const UploadInfo = styled(FlexCenter)`
  flex: 3;
  justify-content: space-around;
`;

const UploadProgress = styled.div`
  flex: 1;
`;

import { connect } from "react-redux";

const FileGrid = (props) => {
  const files = props.files;
  const fileList = files.map((file) => <File key={file.id} file={file}></File>);

  return (
    <div className="storage-file-grid">
      {fileList}

      <BottomUploadBox>
        <Uploader>
          <UploadInfo>
            <CircularIcon width="24" fill="green"></CircularIcon>
            <span>Devlopemnt book.pdf</span>
            <SuccessIcon width="24"></SuccessIcon>
          </UploadInfo>
          <UploadProgress>
            <Progress percent={67} status="active" showInfo={false} />
          </UploadProgress>
        </Uploader>
      </BottomUploadBox>
    </div>
  );
};

const mapS2P = (state) => ({ files: state.drive.files });

export default connect(mapS2P)(FileGrid);
