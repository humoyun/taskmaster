import React from "react";
import File from "./File";

import { connect } from "react-redux";

const FileGrid = props => {
  const files = props.files;
  const fileList = files.map(file => <File key={file.id} file={file}></File>);
  return <div className="storage-file-grid">{fileList}</div>;
};

const mapS2P = state => ({ files: state.drive.files });

export default connect(mapS2P)(FileGrid);
