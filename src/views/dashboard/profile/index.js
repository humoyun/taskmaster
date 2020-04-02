import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ProfileView from "./ProfileView";
import ProfilePanel from "./ProfilePanel";
import Team from "./Team";
import "./style.less";

import { connect } from "react-redux";
import { getUserInfo } from "@/store/actions/auth";
import withEmpty from "@/components/hoc/withEmpty";

const ProfileTeams = styled.div`
  grid-area: teams;
  color: #444;
`;

const Teams = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: #fff;
  border-radius: 5px;
`;

const Contributions = styled.div``;
const AboutMe = styled.div``;
const Settings = styled.div``;
const ActivityStream = styled.div``;

function ProfilePage({ teams, user, getUserInfo }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const call = async () => await getUserInfo();
    call();
    setLoading(false);

    return () => {
      console.log("projects clean up");
    };
  }, []);

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

const mapStateToProps = state => {
  return {
    teams: state.teams,
    user: {}
  };
};

const actionCreators = {
  getUserInfo
};

export default connect(mapStateToProps, actionCreators)(ProfilePage);
