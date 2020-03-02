import React from "react";
import styled from "styled-components";
import "./style.less";

const ProfileWrapper = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 2fr;
  grid-auto-rows: minmax(400px, auto);

  @media only screen and (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const ProfileView = styled.div`
  border: 1px solid #ccc;
  color: #444;
  border-radius: 5px;
  padding: 20px;
  height: 450px;
  font-size: 150%;
  background-color: #fff;
`;

const ProfilePanel = styled.div`
  border: 1px solid #ccc;
  color: #444;
  border-radius: 5px;
  padding: 20px;
  height: 650px;
  font-size: 150%;
  background-color: #fff;
`;

const Contributions = styled.div``;
const AboutMe = styled.div``;
const Settings = styled.div``;
const ActivityStream = styled.div``;

export default function Profile() {
  return (
    <div className="tm-profile-page">
      User Profile Page
      <ProfileWrapper>
        <ProfileView></ProfileView>
        <ProfilePanel></ProfilePanel>
      </ProfileWrapper>
    </div>
  );
}
