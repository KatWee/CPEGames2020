import React, { Component } from "react";
import ScoreCard from "./ScoreCard";
import { Row, Col } from "antd";

class ScoreBoard extends Component {
  render() {
    return (
      <div>
        <div>
          <h1 style={{ marginBottom: "0" }}>CPE Games 2020</h1>
          <h2 style={{ textAlign: "center", color: "white" }}>
            Angel VS Devil
          </h2>
        </div>
        <Row>
          <Col span={12}>
            <ScoreCard team={"angel"} />
          </Col>
          <Col span={12}>
            <ScoreCard team={"devil"} />
          </Col>
        </Row>
      </div>
    );
  }
}
export default ScoreBoard;
