import React from "react";
import styled from "styled-components";
import { Icon } from "antd";
import ProfileView from "./ProfileView";
import ProfilePanel from "./ProfilePanel";
import Team from "./Team";
import "./style.less";

const ProfileTeams = styled.div`
  border: 1px solid #ccc;
  grid-area: teams;
  color: #444;
  border-radius: 5px;
`;

const Teams = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const Contributions = styled.div``;
const AboutMe = styled.div``;
const Settings = styled.div``;
const ActivityStream = styled.div``;

function ProfilePage() {
  const teams = [
    {
      id: "team-1",
      title: "frontend",
      owner: "mudin",
      created: "18-08-2018",
      members: [
        { id: "mudin-id", name: "mudin" },
        { id: "humoyun-id", name: "humoyun" }
      ],
      icon: "team-rowing"
    },
    {
      id: "team-2",
      title: "task force",
      owner: "humoyun",
      created: "20-12-2019",
      members: [
        { id: "farxod-id", name: "farxod" },
        { id: "humoyun-id", name: "humoyun" }
      ],
      icon: "team-rowing"
    },
    {
      id: "team-3",
      title: "legacy apps",
      owner: "sardor",
      created: "09-04-2016",
      members: [{ id: "sardor-id", name: "sardor" }],
      icon: "team-rowing"
    }
  ];

  return (
    <div className="tm-profile-page">
      <div className="profile-left-part">
        <ProfileView></ProfileView>
        <ProfileTeams>
          <Teams>
            {teams.map(team => (
              <Team key={team.id} team={team}></Team>
            ))}
          </Teams>
        </ProfileTeams>
      </div>

      <ProfilePanel></ProfilePanel>
    </div>
  );
}

export default ProfilePage;
