import React, { Component } from "react";
import ScoreCard from "./ScoreCard";
import { Row, Col, Tabs } from "antd";
import RecordBoard from "./Record";
import ScoreForm from "./ScoreForm";
import AdminRecord from "./AdminRecord";
import firebase from "firebase";

const { TabPane } = Tabs;

var RecordRef = firebase.database().ref();
const fetchData = () => new Promise((resolve, reject) => {
  const arrayTemp = []
  RecordRef.on("value", function(snapshot) {
      snapshot.forEach(function(data) {
        arrayTemp.push({
          team: `${data.val().team}`,
          score: `${data.val().score}`
        });
      });
      return resolve(arrayTemp);
    });
})
class Admin extends Component {
  constructor(props){
    super(props);
    this.state  = {
      array: [],
      angelScore: 0,
      devilScore: 0,
    }
  }

  componentDidMount = async () => {
    const data = await fetchData()
    return this.setState({array:data})
  }
  render() {
    var angel = 0;
    var devil = 0;
    this.state.array.forEach(element => {
      if(element.team === "Devil")
      {
        angel = angel+Number(element.score);
      }else{
       devil = devil+Number(element.score);
      }
      });

      this.state.devilScore = 0;
      this.state.angelScore = 0;

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
            <ScoreCard team={"angel"} score={angel} />
          </Col>
          <Col span={12}>
            <ScoreCard team={"devil"} score={devil}/>
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
                <AdminRecord/>
              </TabPane>
              <TabPane tab="Add Record" key="2">
                <ScoreForm/>
              </TabPane>
            </Tabs>
          </div>
        </Row>
      </div>
    );
  }
}
export default Admin;
