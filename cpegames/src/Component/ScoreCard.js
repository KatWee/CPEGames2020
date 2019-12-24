import React, { Component } from "react";
import { Card } from "antd";
import CardCSS from "./Card.css"
import { Tag } from 'antd';
class ScoreCard extends Component {
    
  render() {
    const teamName = this.props.team.toUpperCase();
    const CardTitle = `${teamName} SCORE`;
    const teamColor = this.props.team == "angel" ? "#467DFF" : "#FF6369"
    return (
      <div>
        <Card title={CardTitle} bordered={false}>
            <p style={{color:`${teamColor}`}}>100</p>
        </Card>
      </div>
    );
  }
}
export default ScoreCard;
