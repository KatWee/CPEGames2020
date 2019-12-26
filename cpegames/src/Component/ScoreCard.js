import React, { Component } from "react";
import { Card } from "antd";
import CardCSS from "./Card.css";
import { Tabs } from "antd";

class ScoreCard extends Component {
  render() {
    const teamName = this.props.team.toUpperCase();
    const CardTitle = `${teamName} SCORE`;
    const teamColor = this.props.team == "angel" ? "#467DFF" : "#FF6369";
    const { TabPane } = Tabs;
    return (
      <div>
        <div className="card-container">
          <Tabs type="card" >
            <TabPane tab={CardTitle} key="1">
              <p style={{ color: `${teamColor}` }}>100</p>
            </TabPane>
          </Tabs>
        </div>
      </div>
    );
  }
}
export default ScoreCard;
