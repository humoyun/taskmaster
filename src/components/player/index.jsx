import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import PlayIcon from "@/icons/misc/play-button.svg";
import PauseIcon from "@/icons/misc/pause-button.svg";
import { FlexCenter } from "@/common/ui";

import vPlyr from "./vPlyr";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-height: 200px;

  &:hover {
    .play-button {
      opacity: 1;
    }
  }

  video {
    width: 100%;
    height: auto;
    outline: none;
    border-radius: 3px;
    filter: blur(${(props) => props.blur}px);
  }
`;

const PlayButton = styled(FlexCenter)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: ${(props) => props.height}px;
  user-select: none;
  opacity: 0;
  transition: opacity 0.2s;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 58px;
    height: 58px;
    background-color: #fff;
    border-radius: 50%;
    opacity: 0.7;
    box-shadow: -2px 1px 21px 2px rgba(255, 255, 255, 0.7);

    svg {
      cursor: pointer;
      width: 52px;
      height: 52px;
    }
  }
`;

let player;

const VideoPlayer = ({ src, options, type }) => {
  const [source, setSource] = useState(src);
  const [isPaused, setIsPaused] = useState(true);
  const [blur, setBlur] = useState(3);
  const [height, setHeight] = useState(150);
  const defPoster =
    "https://task-master-cloud.s3.ap-northeast-2.amazonaws.com/misc/video-poster_tn.jpg";
  const vpOptions = {};

  useEffect(() => {
    const container = document.querySelector("#video-player-id");
    player = new vPlyr(container, vpOptions);
    // setHeight(container.offsetHeight);
    const endedHandler = () => console.log("video ended");
    player.on("ended", endedHandler);

    return () => {
      console.log("(){} video player useEffect done");
    };
  }, []);

  useEffect(() => {
    setSource(src);
    console.log("video player src: ", src);

    return () => {};
  }, [src]);

  const handlePlay = () => {
    player.togglePlay();
    setIsPaused(!isPaused);
    setBlur(isPaused ? 0 : 1);

    console.log("handlePlay");
  };

  return (
    <Wrapper className="tm-video-player-wrapper" blur={blur}>
      <video
        id="video-player-id"
        preload="none"
        width="200"
        height="150"
        poster={defPoster}
      >
        {type === "webm" ? (
          <source src={source} type="video/webm" />
        ) : (
          <source src={source} type="video/mp4" />
        )}
      </video>

      <PlayButton className="play-button" height={height}>
        <div className="player-shadow" onClick={handlePlay}>
          {isPaused ? (
            <PlayIcon style={{ fontSize: 24 }}></PlayIcon>
          ) : (
            <PauseIcon style={{ fontSize: 24 }}></PauseIcon>
          )}
        </div>
      </PlayButton>
    </Wrapper>
  );
};

VideoPlayer.propTypes = {
  options: PropTypes.object,
  src: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired, // webm or mp4
  poster: PropTypes.string,
};

export default VideoPlayer;
