import React, { useEffect } from "react";
import StorageHeader from "./StorageHeader";
import FilePreview from "./FilePreview";
import FileGrid from "./FileGrid";
import { connect } from "react-redux";
import { getFiles } from "@/store/actions/storage";

import "./style.less";

const Storage = ({ getFiles }) => {
  useEffect(() => {
    const getCloudFiles = async () => {
      await getFiles();
    };

    getCloudFiles();
  }, []);

  return (
    <div className="tm-cloud-storage">
      <StorageHeader></StorageHeader>

      <div className="storage-content">
        <FileGrid></FileGrid>
        <div className="storage-file-preview">
          <FilePreview></FilePreview>
        </div>
      </div>
    </div>
  );
};

const actionCreator = {
  getFiles
};

export default connect(null, actionCreator)(Storage);
