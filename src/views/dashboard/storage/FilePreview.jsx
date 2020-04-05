import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Imager from "@/components/imager";
import VideoPlayer from "@/components/player";
import Folder from "./Folder";

const Wrapper = styled.div`
  width: 100%;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const MediaPreview = styled.div`
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
`;

const FileInfo = styled.div`
  width: 100%;
  margin-top: 10px;
  margin-bottom: 20px;
  color: #444;

  table {
    font-size: 0.9em;
    width: 90%;

    td {
      padding: 2px;
    }

    .td-key {
      font-weight: bold;
    }
  }
`;

const LinkBox = styled.div`
  width: 100%;
  padding: 5px 10px;
  font-size: 0.9em;
  background-color: #fff;
  color: #444;
  border: 1px solid #ccc;
  border-radius: 3px;

  span {
    display: inline-block;
  }

  span.header {
    color: #98a6ad;
    margin-bottom: 5px;
  }
  span.link {
    color: dodgerBlue;
  }
`;

const CopyText = styled.div`
  width: 100%;
  padding: 10px 0;
  font-size: 0.9em;
  color: #98a6ad;
`;

function FilePreview({ currentFile }) {
  // const mediaMaker = () => {
  //   if (currentFile.mediaType === "video")
  //     return ;
  //   else if (currentFile.mediaType === "image")
  //     return (

  //     );
  //   else return
  // };

  return (
    <Wrapper className="file-preview">
      {currentFile ? (
        <>
          <MediaPreview>
            {currentFile.mediaType === "video" ? (
              <VideoPlayer
                src={currentFile.url}
                key={currentFile.url}
                type={currentFile.extension}
              />
            ) : currentFile.mediaType === "image" ? (
              <Imager
                src={currentFile.url}
                key={currentFile.url}
                thumbnail={currentFile.thumbUrl}
                alt="file manager ui"
                radius="2"
                maxHeight="200"
              />
            ) : (
              <Folder type={currentFile.extension}></Folder>
            )}
          </MediaPreview>

          <FileInfo>
            <table>
              <tbody>
                <tr>
                  <td className="td-key">Name</td>
                  <td>{currentFile.name}</td>
                </tr>
                <tr>
                  <td className="td-key">Type</td>
                  <td>Image</td>
                </tr>
                <tr>
                  <td className="td-key">Size</td>
                  <td>10 MB (10 343 343 bytes)</td>
                </tr>
                <tr>
                  <td className="td-key">Location</td>
                  <td> Downloads / Images</td>
                </tr>
                <tr>
                  <td className="td-key">Opened</td>
                  <td>Jul 26, 2016 17:34</td>
                </tr>
                <tr>
                  <td className="td-key">Created</td>
                  <td>Apr 06, 2016 11:34</td>
                </tr>
              </tbody>
            </table>
          </FileInfo>

          <LinkBox>
            <span className="header"> Link to download</span>
            <span className="link">{currentFile.url}</span>
            {/* https://www.freecodecamp.org/news/how-i-built-a-web-crawler-to-automate-my-job-search-f825fb5af718 */}
          </LinkBox>

          <CopyText>Click * Copy to clipboard</CopyText>
        </>
      ) : (
        <div>Empty (temporary solution)</div>
      )}
    </Wrapper>
  );
}

const mapStateToProps = (state) => ({ currentFile: state.drive.currentFile });

export default connect(mapStateToProps)(FilePreview);
