import React from "react";
import styled from "styled-components";
import { Progress, Icon } from "antd";
import { ResponsiveBump } from "@nivo/bump";
import { ResponsivePie } from "@nivo/pie";
import Projects from "@/icons/dash/agile-projects.svg";
import FileInfo from "@/icons/dash/file-info.svg";
import Sprints from "@/icons/dash/sprints.svg";
import TaskList from "@/icons/dash/task-list.svg";
import bumpData from "./bump-data.json";
import pieChartData from "./pie-chart-data.json";

const BoxWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
  color: #444;
  margin-bottom: 30px;

  @media only screen and (max-width: 1200px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }

  @media only screen and (max-width: 920px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
`;

const Box = styled.div`
  display: grid;
  grid-template-columns: 25% auto;
  grid-template-rows: [first-row] 7fr [second-row] 3fr;

  border: 1px solid #ccc;
  color: #444;
  border-radius: 5px;
  height: 110px;
  font-size: 140%;
  background-color: #fff;

  .icon-box {
    align-self: center;
    justify-self: center;
  }
  .info-box {
    align-self: center;
    justify-self: start;
  }
  .progress-box {
    grid-column-start: span 2;
    padding: 0 15px;
    align-self: start;
  }
`;

const ChartWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  color: #444;

  @media only screen and (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`;

const LineChartBox = styled.div`
  border: 1px solid #ccc;
  color: #444;
  max-width: 99%;
  border-radius: 5px;
  padding: 20px;
  height: 450px;
  font-size: 150%;
  background-color: #fff;
`;

const PieChartBox = styled.div`
  border: 1px solid #ccc;
  color: #444;
  max-width: 99%;
  border-radius: 5px;
  padding: 20px;
  height: 450px;
  font-size: 150%;
  background-color: #fff;
`;

// const Pie2ChartBox = styled.div`
//   border: 1px solid #ccc;
//   color: #444;
//   border-radius: 5px;
//   padding: 20px;
//   height: 350px;
//   font-size: 150%;
//   background-color: #fff;
// `;

export default function DashGrid(props) {
  const list = [
    {
      key: "box-1",
      data: {},
      msg: "12 Projects",
      component: Projects,
      percent: 56
    },
    {
      key: "box-2",
      data: {},
      msg: "45 Sprints",
      component: Sprints,
      percent: 67
    },
    {
      key: "box-4",
      data: {},
      msg: "341 Tasks",
      component: TaskList,
      percent: 71
    },
    {
      key: "box-6",
      data: {},
      msg: "23 Files, overall 235 Mb",
      component: FileInfo,
      percent: 34
    }
  ];

  return (
    <div className="dashboard-grid-layout">
      <BoxWrapper>
        {list.map(item => (
          <Box className="info-box" key={item.key}>
            <div className="icon-box">
              <Icon style={{ fontSize: 40 }} component={item.component} />
            </div>
            <div className="info-box">{item.msg}</div>
            <div className="progress-box">
              <Progress
                strokeColor={{
                  "0%": "#108ee9",
                  "100%": "#87d068"
                }}
                percent={item.percent}
              />
            </div>
          </Box>
        ))}
      </BoxWrapper>

      <ChartWrapper>
        <PieChartBox>
          <ResponsiveBump
            data={bumpData}
            margin={{ top: 40, right: 100, bottom: 40, left: 60 }}
            colors={{ scheme: "spectral" }}
            lineWidth={3}
            activeLineWidth={6}
            inactiveLineWidth={3}
            inactiveOpacity={0.15}
            pointSize={10}
            activePointSize={16}
            inactivePointSize={0}
            pointColor={{ theme: "background" }}
            pointBorderWidth={3}
            activePointBorderWidth={3}
            pointBorderColor={{ from: "serie.color" }}
            axisTop={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "",
              legendPosition: "middle",
              legendOffset: -36
            }}
            axisRight={null}
            axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "",
              legendPosition: "middle",
              legendOffset: 32
            }}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "ranking",
              legendPosition: "middle",
              legendOffset: -40
            }}
          />
        </PieChartBox>

        <LineChartBox>
          <ResponsivePie
            data={pieChartData}
            margin={{ top: 40, right: 0, bottom: 80, left: 0 }}
            innerRadius={0.5}
            padAngle={0.7}
            cornerRadius={3}
            colors={{ scheme: "set1" }}
            borderWidth={1}
            borderColor={{ from: "color", modifiers: [["darker", 0.4]] }}
            radialLabelsSkipAngle={10}
            radialLabelsTextXOffset={6}
            radialLabelsTextColor="#333333"
            radialLabelsLinkOffset={0}
            radialLabelsLinkDiagonalLength={16}
            radialLabelsLinkHorizontalLength={24}
            radialLabelsLinkStrokeWidth={1}
            radialLabelsLinkColor={{ from: "color" }}
            slicesLabelsSkipAngle={10}
            slicesLabelsTextColor="#333333"
            animate={true}
            motionStiffness={90}
            motionDamping={15}
            defs={[
              {
                id: "dots",
                type: "patternDots",
                background: "inherit",
                color: "rgba(255, 255, 255, 0.3)",
                size: 4,
                padding: 1,
                stagger: true
              },
              {
                id: "lines",
                type: "patternLines",
                background: "inherit",
                color: "rgba(255, 255, 255, 0.3)",
                rotation: -45,
                lineWidth: 6,
                spacing: 10
              }
            ]}
            fill={[
              {
                match: {
                  id: "ruby"
                },
                id: "dots"
              },
              {
                match: {
                  id: "c"
                },
                id: "dots"
              },
              {
                match: {
                  id: "go"
                },
                id: "dots"
              },
              {
                match: {
                  id: "python"
                },
                id: "dots"
              },
              {
                match: {
                  id: "scala"
                },
                id: "lines"
              },
              {
                match: {
                  id: "lisp"
                },
                id: "lines"
              }
            ]}
            legends={[
              {
                anchor: "bottom",
                direction: "row",
                translateY: 56,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: "#999",
                symbolSize: 18,
                symbolShape: "circle",
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemTextColor: "#000"
                    }
                  }
                ]
              }
            ]}
          />
        </LineChartBox>
      </ChartWrapper>
    </div>
  );
}
