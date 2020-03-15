import React, { useState, useEffect } from "react";
import { ResponsiveCalendar } from "@nivo/calendar";
import { List, Avatar, Button, Skeleton } from "antd";
import styled from "styled-components";
import userTracking from "./user-tracking";

const Wrapper = styled.div`
  border: 1px solid #ccc;
  color: #444;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
`;
// overflow-y: auto;
const Controls = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-evently;

  button {
    flex: 1;
  }

  button:nth-child(2) {
    margin: 0 10px;
  }
`;

const WorkedOn = styled.div`
  width: 100%;
  color: #444;
  padding: 10px;
  align-items: center;
`;

const UserTrackingBox = styled.div`
  width: 100%;
  height: 300px;
  color: #444;
  padding: 0 10px;
  align-items: center;
`;

const ItemContent = styled.div`
  width: 100%;
  color: #444;
  display: flex;
  align-items: center;

  .img-box {
    width: 25px;
    height: 25px;
    margin-right: 10px;

    img {
      width: 100%;
    }
  }

  .content {
    flex: 7;

    .title {
      font-size: 1.1em;
    }
    .desc {
      color: #ccc;
      font-size: 0.9em;
    }
  }
`;

// const ProfilePanel = styled.div`
//   border: 1px solid #ccc;
//   grid-area: panel;
//   color: #444;
//   border-radius: 5px;
//   padding: 20px;
//   background-color: #fff;
// `;

const initState = [
  {
    id: "task-123",
    key: Math.random()
      .toString(36)
      .slice(2, 10),
    title: "Mesh request server message text",
    participants: ["Melman"],
    project: "Insite Dev",
    date: "23-11-2019"
  },
  {
    id: "task-124",
    key: Math.random()
      .toString(36)
      .slice(2, 10),
    title:
      "When I make 3D object after turning back from 'pan' mode, the first click is not active.",
    participants: ["Melman", "Alex"],
    project: "Insite Dev",
    date: "23-11-2019"
  },
  {
    id: "task-125",
    key: Math.random()
      .toString(36)
      .slice(2, 10),
    title: "Number of tag attachments are not displaying correctly",
    participants: ["Osman"],
    project: "Insite Dev",
    date: "23-11-2019"
  },
  {
    id: "task-126",
    key: Math.random()
      .toString(36)
      .slice(2, 10),
    title: "Add Handheld capture into YouVR 3D Home",
    participants: ["Farxod"],
    project: "Insite Dev",
    date: "23-11-2019"
  },
  {
    id: "task-128",
    key: Math.random()
      .toString(36)
      .slice(2, 10),
    title: "Change the placeholder of searchbar",
    participants: ["Farxod"],
    project: "Insite Dev",
    date: "23-11-2019"
  },
  {
    id: "task-129",
    key: Math.random()
      .toString(36)
      .slice(2, 10),
    title: "[WebRTC] Do research about web RTC (Android)",
    participants: ["Farxod"],
    project: "Insite Dev",
    date: "23-11-2019"
  }
];

function ProfilePanel() {
  const [data, setData] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [counter, setCounter] = useState(0);
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState("activities");

  const controlButtons = [
    {
      key: "activities",
      isActive: true,
      text: "Activities"
    },
    {
      key: "aboutme",
      isActive: false,
      text: "About me"
    },
    {
      key: "settings",
      isActive: false,
      text: "Settings"
    }
  ];

  // const handleActive = (key) => {
  //   const active = controlButtons.find( btn => btn.key === key);
  //   active.isActive = true;
  // }

  const onLoadMore = async () => {
    setLoading(true);

    setTasks(
      data.concat(
        [...new Array(3)].map(() => ({
          loading: true,
          name: {}
        }))
      )
    );

    const res = await getData();
    let newData = data.concat(res);
    setLoading(false);
    setData(newData);
    setTasks(newData);

    // this.setState(
    //   {
    //     data,
    //     list: data,
    //     loading: false
    //   },
    //   () => {
    //     // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
    //     // In real scene, you can using public method of react-virtualized:
    //     // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
    //     window.dispatchEvent(new Event("resize"));
    //   }
    // );
  };

  const getData = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        const data = initState.slice(counter, counter + 3);
        setCounter(counter + 3);
        return resolve(data);
      }, 700);
    });
  };

  useEffect(() => {
    getData().then(data => {
      setLoading(false);
      setData(data);
      setTasks(data);
    });

    return () => {
      console.log("useEffect clean up");
    };
  }, []);

  const loadMore = !loading ? (
    <div
      style={{
        textAlign: "center",
        margin: 12,
        height: 32,
        lineHeight: "32px"
      }}
    >
      <Button onClick={onLoadMore}>loading more</Button>
    </div>
  ) : null;
  // ant-list-item
  return (
    <Wrapper className="profile-right-part">
      <Controls>
        {controlButtons.map(btn => (
          <Button
            type={active === btn.key ? "primary" : "default"}
            onClick={() => setActive(btn.key)}
          >
            {btn.text}
          </Button>
        ))}
      </Controls>

      <WorkedOn>
        <List
          bordered={true}
          className="latest-tasks-list"
          loading={loading}
          itemLayout="horizontal"
          loadMore={loadMore}
          dataSource={tasks}
          renderItem={item => (
            <List.Item actions={[<a key="list-loadmore-edit">show</a>]}>
              <Skeleton avatar title={false} loading={item.loading} active>
                <ItemContent>
                  <div className="img-box">
                    <img src="/assets/icons/task.png" alt="" />
                  </div>
                  <div className="content">
                    <div className="title">{item.title}</div>
                    <div className="desc">
                      {item.project} * You created this issue
                    </div>
                  </div>
                </ItemContent>
              </Skeleton>
            </List.Item>
          )}
        />
      </WorkedOn>

      <UserTrackingBox>
        <ResponsiveCalendar
          data={userTracking}
          from="2016-01-01"
          to="2016-12-12"
          emptyColor="#eeeeee"
          colors={["#61cdbb", "#97e3d5", "#e8c1a0", "#f47560"]}
          margin={{ top: 0, right: 20, bottom: 30, left: 20 }}
          yearSpacing={40}
          monthBorderColor="#ffffff"
          dayBorderWidth={2}
          dayBorderColor="#ffffff"
          legends={[
            {
              anchor: "bottom-right",
              direction: "row",
              translateY: 36,
              itemCount: 4,
              itemWidth: 42,
              itemHeight: 36,
              itemsSpacing: 14,
              itemDirection: "right-to-left"
            }
          ]}
        />
      </UserTrackingBox>
    </Wrapper>
  );
}

export default ProfilePanel;
