import React from "react";
import styled from "styled-components";
import "./style.less";
import StorageHeader from "./StorageHeader";
import FilePreview from "./FilePreview";
import FileGrid from "./FileGrid";

export default function Storage() {
  return (
    <div className="tm-cloud-storage">
      <StorageHeader></StorageHeader>

      <div className="storage-content">
        <FileGrid></FileGrid>
        <FilePreview></FilePreview>
      </div>
    </div>
  );
}
