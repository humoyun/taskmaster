import React, { Component } from 'react'
import MyImage from '../../../public/assets/images/tasker.png';
import { Button } from 'antd';
import { Steps } from 'antd';

const { Step } = Steps;



export default class ProjectCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      today: ''
    }
    this.onChange = this.onChange.bind(this);
  }

  onChange(date, dateString) {
    this.setState(state => ({ today: dateString }) ) 
  }


  render() {
    return (
      <div className="project-card">
        <div className="img-wrapper">
          <img src={MyImage} alt="task-image"></img>
        </div>
        <Button type="primary" loading={true}>Start</Button>
        <Button type="danger">Info</Button>
        <Button type="dashed">Dashed</Button>

        <Steps current={1}>
          <Step title="Finished" description="This is a description." />
          <Step title="In Progress" subTitle="Left 00:00:08" description="This is a description." />
          <Step title="Waiting" description="This is a description." />
        </Steps>
        
        <div>{this.state.today}</div>


      </div>
    )
  }
}
