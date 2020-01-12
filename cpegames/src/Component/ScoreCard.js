import React, { Component } from "react";
import { Card,Tabs } from "antd";
import CardCSS from "./Card.css";


const { TabPane } = Tabs;

class ScoreCard extends Component {
  render() {
    const teamName = this.props.team.toUpperCase();
    const score = this.props.score;
    const CardTitle = `${teamName} SCORE`;
    const teamColor = this.props.team == "angel" ? "#467DFF" : "#FF6369";
    return (
      <div>
        <div className="card-container">
          <Tabs type="card" >
            <TabPane tab={CardTitle} key="1">
              <p style={{ color: `${teamColor}` }}>{score}</p>
            </TabPane>
          </Tabs>
        </div>
      </div>
    );
  }
}
export default ScoreCard;
