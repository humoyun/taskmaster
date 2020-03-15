import React from "react";
import styled from "styled-components";

const Preview = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 200px;
  margin-top: 10px;
  background-color: #fff;
  border-radius: 3px;
  font-size: 10px;
  color: #c7c7c7;
  font-weight: 600;

  img {
    width: 90%;
    object-fit: contain;
  }
`;

const TextBox = styled.div`
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  background-color: #fff;
  color: #444;
`;

const IconBox = styled.div`
  width: 30px;
  padding: 30px;
  font-size: 30;
`;

function FilePreview() {
  return (
    <div className="storage-file-preview">
      <Preview>
        <img src="https://protective-h2020.eu/wp-content/uploads/2016/05/Img-protective-02-500x300.png"></img>
      </Preview>
    </div>
  );
}

export default FilePreview;
