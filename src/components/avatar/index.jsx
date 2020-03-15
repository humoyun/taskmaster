import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  width: ${props => props.width}px;
  height: ${props => props.width}px;
  background-color: #fff;
  border-radius: 50%;

  img {
    width: 100%;
    padding: 3px;
    border: 1px solid ${props => props.borderColor};
    border-radius: 50%;
  }
`;

function Avatar(props) {
  const { size, src, borderGap, borderColor } = props;

  return (
    <Wrapper
      className="profile-avatar"
      width={size + borderGap}
      size={size}
      borderColor={borderColor}
    >
      <img src={src} alt="" />
    </Wrapper>
  );
}

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  size: PropTypes.number,
  borderGap: PropTypes.number,
  borderColor: PropTypes.string
};

Avatar.defaultProps = {
  size: 50,
  borderGap: 4,
  borderColor: "#dee2e6"
};

export default Avatar;
