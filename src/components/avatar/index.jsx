import React from "react";
import PropTypes from "prop-types";
import { Avatar } from "antd";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.width};
  height: ${props => props.width};
  margin: 0 auto;
  background-color: #fff;
  border: 1px solid ${props => props.borderColor};
  border-radius: 50%;
`;

function Avatar(props) {
  const { size, borderGap, borderColor } = props;

  return (
    <Wrapper width={borderGap} borderColor={borderColor}>
      <Avatar size={size} src="https://i.pravatar.cc/100?img=59" />
    </Wrapper>
  );
}

Avatar.propTypes = {
  size: PropTypes.number.isRequired,
  borderGap: PropTypes.number,
  borderColor: PropTypes.string
};

Avatar.defaultProps = {
  size: 50,
  borderGap: 2,
  borderColor: "dodgerBlue"
};

export default Avatar;
