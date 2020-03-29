import React from "react";
import StorageHeader from "./StorageHeader";
import FilePreview from "./FilePreview";
import FileGrid from "./FileGrid";

import "./style.less";

export default function Storage() {
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
}
