import React from "react";
import styled from "styled-components";

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
  border: 1px solid #ccc;
  color: #fff;
  border-radius: 5px;
  padding: 20px;
  height: 150px;
  font-size: 150%;
  background-color: ${props => props.color};
`;

const ChartWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  color: #444;

  @media only screen and (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`;

const LineChartBox = styled.div`
  border: 1px solid #ccc;
  color: #444;
  border-radius: 5px;
  padding: 20px;
  height: 350px;
  font-size: 150%;
  background-color: #fff;
`;

const PieChartBox = styled.div`
  border: 1px solid #ccc;
  color: #444;
  border-radius: 5px;
  padding: 20px;
  height: 350px;
  font-size: 150%;
  background-color: #fff;
`;

const Pie2ChartBox = styled.div`
  border: 1px solid #ccc;
  color: #444;
  border-radius: 5px;
  padding: 20px;
  height: 350px;
  font-size: 150%;
  background-color: #fff;
`;

export default function DashGrid(props) {
  const list = [
    { key: "box-1", data: {}, msg: "12 Projects", color: "#91f8ff" },
    { key: "box-2", data: {}, msg: "45 Sprints", color: "#9cc3ff" },
    { key: "box-4", data: {}, msg: "341 Tasks", color: "#daa6ff" },
    {
      key: "box-6",
      data: {},
      msg: "23 Files, overall 235 Mb",
      color: "#91ffaf"
    }
  ];

  return (
    <div className="dashboard-grid-layout">
      <BoxWrapper>
        {list.map(item => (
          <Box className="info-box" key={item.key} color={item.color}>
            {item.msg}
          </Box>
        ))}
      </BoxWrapper>

      <ChartWrapper>
        <PieChartBox>PieChartBox</PieChartBox>
        <Pie2ChartBox>Pie2ChartBox</Pie2ChartBox>
        <LineChartBox>LineChartBox</LineChartBox>
      </ChartWrapper>
    </div>
  );
}
