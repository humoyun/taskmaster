import React from "react";
import FilePreview from "./FilePreview";
import FileGrid from "./FileGrid";

const Dummy = () => {
  return (
    <div className="storage-content">
      <FileGrid></FileGrid>
      <div className="storage-file-preview">
        <FilePreview></FilePreview>
      </div>
    </div>
  );
};

export default Dummy;
