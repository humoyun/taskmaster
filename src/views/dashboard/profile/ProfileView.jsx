import React from "react";
import styled from "styled-components";
import Avatar from "@/components/avatar";

const Wrapper = styled.div`
  border: 1px solid #ccc;
  color: #444;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
  margin-bottom: 20px;
`;

const AvatarBox = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  color: #444;

  .names {
    .fullname {
      font-size: 1.3em;
      color: #444;
    }

    .username {
      font-size: 0.9em;
      color: #98a6ad;
    }
  }
`;

const InfoBox = styled.div`
  color: #444;
  flex: 3;
  color: #98a6ad;

  .about-me {
    color: #444;
    margin-bottom: 5px;
    font-weight: bold;
  }

  table {
    margin-top: 15px;

    tr {
      td {
        padding: 2px;
        padding-right: 15px;
      }
    }
  }
`;

const SocialBox = styled.div`
  color: #444;
  flex: 1;
`;

function Profile() {
  const aboutMe =
    "Apparently, this user prefers to keep an air of mystery about them.";

  return (
    <Wrapper className="profile-card">
      <AvatarBox>
        <Avatar
          size={64}
          src="https://gitlab.com/uploads/-/system/user/avatar/2268258/avatar.png?width=200"
        ></Avatar>
        <div className="names">
          <div className="fullname">Humoyun Ahmad</div>
          <span className="username">@websocket</span>
        </div>
      </AvatarBox>

      <InfoBox>
        <div className="about-me">ABOUT ME:</div>
        <span>
          Hi I'm Johnathn Deo,has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type.
        </span>
        <table>
          <tbody>
            <tr>
              <td>Full Name : </td>
              <td>Geneva D. McKnight </td>
            </tr>
            <tr>
              <td>Mobile :</td>
              <td> (123) 123 1234</td>
            </tr>
            <tr>
              <td>Position</td>
              <td>Software Engineer</td>
            </tr>
            <tr>
              <td>Email :</td>
              <td>user@email.domain</td>
            </tr>
            <tr>
              <td>Location :</td>
              <td>South Korea</td>
            </tr>
          </tbody>
        </table>
      </InfoBox>

      <SocialBox></SocialBox>
    </Wrapper>
  );
}

export default Profile;
