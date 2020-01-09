import React, { Component } from "react";
import ScoreCard from "./ScoreCard";
import { Row, Col, Tabs } from "antd";
import RecordBoard from "./Record";
import ScoreForm from "./ScoreForm";
import AdminRecord from "./AdminRecord";

const { TabPane } = Tabs;
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
        <Row>
          <div className="card-container">
            <Tabs
              type="card"
              style={{
                width: "90%",
                marginTop: "40px"
              }}
            >
              <TabPane tab="Score Record" key="1">
                <RecordBoard />
              </TabPane>
              <TabPane tab="Add Record" key="2">
                <ScoreForm/>
              </TabPane>
              <TabPane tab="Score Record" key="3">
                <AdminRecord/>
              </TabPane>
            </Tabs>
          </div>
        </Row>
      </div>
    );
  }
}
export default ScoreBoard;
