import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import PngIcon from "@/icons/files/png.svg";
import JpgIcon from "@/icons/files/jpg.svg";
import DocIcon from "@/icons/files/doc.svg";
import XmlIcon from "@/icons/files/xml.svg";
import JSIcon from "@/icons/files/javascript.svg";
import HtmlIcon from "@/icons/files/html.svg";
import PptIcon from "@/icons/files/ppt.svg";
import ZipIcon from "@/icons/files/zip.svg";
import TxtIcon from "@/icons/files/txt.svg";
import PdfIcon from "@/icons/files/pdf.svg";
import JsonIcon from "@/icons/files/json.svg";
import XlsIcon from "@/icons/files/xls.svg";
import Mp4Icon from "@/icons/files/mp4.svg";
import FolderIcon from "@/icons/files/folder-yellow.svg";
import FileIcon from "@/icons/files/file.svg";

import { connect } from "react-redux";
import { selectFile } from "@/store/actions/storage";

import { DotDotDot } from "@/common/ui";
import dayjs from "dayjs";

const FileItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 1px;
  background-color: #fff;
  border-radius: 3px;
  font-size: 10px;
  color: #c7c7c7;
  font-weight: 600;
  transition: all 0.3s;
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
  max-width: 180px;
  height: 80%;
  display: flex;
  justify-content: center;
  flex-direction: column;

  div {
  }
`;

const RightBox = styled.div`
  flex: 3;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function File(props) {
  const file = props.file;
  const currentFile = props.currentFile;

  const iconMapper = (type) => {
    switch (type) {
      case "folder":
        return <FolderIcon style={{ width: 22 }} />;

      case "doc":
        return <DocIcon style={{ width: 30 }} />;

      case "xls":
        return <XlsIcon style={{ width: 30 }} />;

      case "png":
        return <PngIcon style={{ width: 30 }} />;

      case "jpg" || "jpeg":
        return <JpgIcon style={{ width: 30 }} />;

      case "json":
        return <JsonIcon style={{ width: 30 }} />;

      case "ppt":
        return <PptIcon style={{ width: 30 }} />;

      case "mp4":
        return <Mp4Icon style={{ width: 30 }} />;

      case "mp3":
        return <Mp3Icon style={{ width: 30 }} />;

      case "pdf":
        return <PdfIcon style={{ width: 30 }} />;

      case "zip":
        return <ZipIcon style={{ width: 30 }} />;

      case "xml":
        return <XmlIcon style={{ width: 30 }} />;

      case "js":
        return <JSIcon style={{ width: 30 }} />;

      case "txt":
        return <TxtIcon style={{ width: 30 }} />;

      case "html":
        return <HtmlIcon style={{ width: 30 }} />;

      default:
        return <FileIcon style={{ width: 30 }} />;
    }
  };

  const handleClick = (e) => {
    console.log("file handleClick +> ", e);
    props.selectFile(file.id);
  };

  return (
    <FileItem
      className="storage-item"
      onClick={handleClick}
      style={{
        borderColor:
          currentFile && currentFile.id === file.id ? "#4d7cff" : "#f0f4ff",
      }}
    >
      <LeftBox>{iconMapper(file.extension)}</LeftBox>

      <CenterBox>
        <div className="file-name">
          <DotDotDot style={{ fontSize: 14, color: "#444" }}>
            {file.name}
          </DotDotDot>
        </div>

        <div>
          {file.type === "folder" ? (
            <span>
              {file.numOfFiles} files, {file.size}
            </span>
          ) : (
            <span>
              .{file.extension} / {file.size}
            </span>
          )}
        </div>
      </CenterBox>

      <RightBox>
        {/* <span>October 17, 2019</span> */}
        <span>{dayjs(file.createdAt).format("MMM DD, YYYY")}</span>
      </RightBox>
    </FileItem>
  );
}

File.propTypes = {
  file: PropTypes.shape({ id: PropTypes.string.isRequired }).isRequired,
  file: PropTypes.shape({ type: PropTypes.string.isRequired }).isRequired,
};

const mapStateToProps = (state) => ({ currentFile: state.drive.currentFile });

const actionCreators = {
  selectFile,
};

export default connect(mapStateToProps, actionCreators)(File);
