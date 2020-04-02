import React, { useState, useEffect } from "react";
import { Spin, Icon } from "antd";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  position: relative;

  img {
    width: 100%;
    height: auto;
    filter: blur(${props => props.blur}px);
    object-fit: contain;
    border-radius: ${props => props.radius}px;
  }

  .spin-box {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Imager = ({ src, thumbnail, alt, radius }) => {
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState(thumbnail);
  const [blur, setBlur] = useState(4);

  useEffect(() => {
    const img = new Image();

    img.onload = () => {
      setLoading(false);
      setUrl(src);
      setBlur(0);
    };

    img.src = src;

    return () => {};
  }, []);

  return (
    <Wrapper blur={blur} radius={radius}>
      <img src={url} alt={alt} />
      {loading && (
        <div className="spin-box">
          <Spin indicator={<Icon type="loading" theme="outlined" />} />
        </div>
      )}
    </Wrapper>
  );
};

Imager.propTypes = {
  src: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  alt: PropTypes.string,
  radius: PropTypes.string || 0
};

export default Imager;
