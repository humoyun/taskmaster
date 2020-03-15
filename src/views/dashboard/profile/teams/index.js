import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import withEmpty from "@/components/hoc/withEmpty";
import Team from "./Team";
import "./style.less";

const Teams = props => {
  const teams = props.teams;

  const TeamList = listProps => (
    <div className="teams-container">
      <h2 style={{ color: "#6b7d99" }}>Teams</h2>

      <div className="teams-list">
        {listProps.list.map(team => (
          <Team key={team.id} team={team}></Team>
        ))}
      </div>
    </div>
  );

  const ListWithEmpty = withEmpty(TeamList);

  return (
    <div className="tm-teams">
      <ListWithEmpty isEmpty={teams.length === 0} list={teams}></ListWithEmpty>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    teams: state.teams
  };
};

export default connect(mapStateToProps)(Teams);
