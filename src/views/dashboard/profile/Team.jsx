import React, { useState, useEffect } from "react";
import { Card, Icon, Button } from "antd";
import styled from "styled-components";
import TeamIconOne from "@/icons/teams/team-rowing.svg";
import TeamIconTwo from "@/icons/teams/team-circle.svg";
import TeamIconThree from "@/icons/teams/team-people.svg";

const ItemContent = styled.div`
  width: 100%;
  color: #444;
  display: flex;
  align-items: center;

  .icon-box {
    flex: 2;
  }

  .info-box {
    flex: 10;
    .title {
      font-size: 1.2em;
    }
    .desc {
      color: #ccc;
      font-size: 0.9em;
    }
  }
`;

const CardView = styled.div`
  color: #444;
  height: 60px;
  color: #444;
  border: 1px solid #ccc;
  margin-bottom: 10px;

  @media only screen and (max-width: 1200px) {
    max-width: 150px;
    height: 150px;
    margin: 10px;
  }
`;

const ImgLoader = styled.div`
  width: 100%;
  height: 100%;
  min-height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 150;
  height: 100px;
  background: url(https://ptc-directory-sited-static.us-east-1.prod.public.atl-paas.net/gradients/3.svg);
`;

// {
//   id: "team-1",
//   title: "frontend",
//   owner: "mudin",
//   created: "18-08-2018",
//   members: [
//     { id: "mudin-id", name: "mudin" },
//     { id: "humoyun-id", name: "humoyun" }
//   ],
//   icon: "team-rowing"
// },

const Team = props => {
  const { title } = props.team;

  const style = {
    width: 150,
    height: 100
  };

  return (
    <Card hoverable bodyStyle={{ padding: 10 }} style={{ margin: "5px 0" }}>
      <ItemContent>
        <div className="icon-box">
          <Icon component={TeamIconThree} style={{ fontSize: 42 }} />
        </div>

        <div className="info-box">
          <div className="title">{title}</div>
          <div></div>
        </div>
      </ItemContent>
    </Card>
  );
};

export default Team;
