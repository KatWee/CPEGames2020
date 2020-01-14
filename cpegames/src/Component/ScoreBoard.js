import React, { Component } from "react";
import ScoreCard from "./ScoreCard";
import { Row, Col, Tabs } from "antd";
import RecordBoard from "./Record";
import ScoreForm from "./ScoreForm";
import AdminRecord from "./AdminRecord";
// import firebase from '../firebase';
import {database} from '../firebase'


const { TabPane } = Tabs;

// var RecordRef = firebase.database().ref();
// const fetchData = () => new Promise((resolve, reject) => {
//   const arrayTemp = []
//   RecordRef.on("value", function(snapshot) {
//       snapshot.forEach(function(data) {
//         arrayTemp.push({
//           team: `${data.val().team}`,
//           score: `${data.val().score}`
//         });
//       });
//       return resolve(arrayTemp);
//     });
// })
class ScoreBoard extends Component {
  constructor(props){
    super(props);
    this.state  = {
      angelScore: 0,
      devilScore: 0,
    }
  }

  componentDidMount = async () => {
    console.log('mount score board')
  // database.re
  database.ref().once('value').then(snapshot =>{
    const data = []
    snapshot.forEach(e => {
      data.push(e.val())
    })
    const angelScore = data.filter(e => e.team === 'Angel').reduce((a, b) => a + Number(b.score),0)
    const devilScore = data.filter(e => e.team === 'Devil').reduce((a, b) => a + Number(b.score),0)
    return this.setState({
      angelScore,
      devilScore
    })
  })
    
    // console.log(firebase.database.ref())
  
    // firebase.database().ref().on('value', snapshot => {
    //   snapshot.forEach(e => console.log(e.val()))
    // })
    // firebase.firestore().collection('User').where('UserName', '==', 'Sopon').get().then(doc => {
    //   doc.forEach(e => console.log('te ruk',e.data()))
    // })
    // firebase.database().ref().once('value', snapshot => {
    //   console.log(snapshot.toJSON())
    // })
    
    // firebase.database().ref().on('value',(snapshot, err) => {
    //   console.log(err)
    //   console.log('duneg yoo aj')
    //   snapshot.forEach(e => console.log(e.toJSON()))
    // })
    // const data = await fetchData()
    // return this.setState({array:data})

  }
  render() {
    // var angel = 0;
    // var devil = 0;
    // this.state.array.forEach(element => {
    // if(element.team === "Devil")
    // {
    //   angel = angel+Number(element.score);
    // }else{
    //  devil = devil+Number(element.score);
    // }
    // });

    // this.state.devilScore = 0;
    // this.state.angelScore = 0;
const {angelScore, devilScore} = this.state
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
            <ScoreCard team={"angel"} score={angelScore} />
          </Col>
          <Col span={12}>
            <ScoreCard team={"devil"} score={devilScore}/>
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
            </Tabs>
          </div>
        </Row>
      </div>
    );
  }
}
export default ScoreBoard;
