import React from "react";
import styled from "styled-components";
import { FlexCenter } from "@/common/ui";

import CommandIcon from "@/icons/misc/command.svg";

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
import FolderIcon from "@/icons/files/folder-yellow.svg";
import FileIcon from "@/icons/files/file.svg";

const FolderWrapper = styled(FlexCenter)`
  flex-direction: column;
  width: 100%;
  height: 200px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 3px;

  .icon-box {
    flex: 1;
    display: flex;

    svg {
      width: 120px;
    }
  }
`;

const GuideSpan = styled(FlexCenter)`
  width: 100%;
  heigth: 40px;
  padding: 10px;
  color: #ccc;
  font-size: 12px;

  svg {
    margin-right: 5px;
    width: 14px;
  }
`;

const iconMapper = type => {
  switch (type) {
    case "folder":
      return <FolderIcon />;

    case "doc":
      return <DocIcon />;

    case "xls":
      return <XlsIcon />;

    case "json":
      return <JsonIcon />;

    case "ppt":
      return <PptIcon />;

    case "pdf":
      return <PdfIcon />;

    case "zip":
      return <ZipIcon />;

    case "xml":
      return <XmlIcon />;

    case "js":
      return <JSIcon />;

    case "txt":
      return <TxtIcon />;

    case "html":
      return <HtmlIcon />;

    default:
      return <FileIcon />;
  }
};

const Folder = ({ type }) => {
  return (
    <FolderWrapper>
      <div className="icon-box">{iconMapper(type)}</div>

      <GuideSpan>
        <CommandIcon width="24" fill="#ccc" />
        <span> click space key to see fully</span>
      </GuideSpan>
    </FolderWrapper>
  );
};

export default Folder;
