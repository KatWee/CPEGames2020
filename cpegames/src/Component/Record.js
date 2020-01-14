import React, { Component } from "react";
import { Table } from "antd";
import firebase from "firebase";

const columns = [
  {
    title: "Game",
    dataIndex: "game"
  },
  {
    title: "Prize",
    dataIndex: "prize"
  },
  {
    title: "Team",
    dataIndex: "team"
  },
  {
    title: "Score",
    dataIndex: "score"
  }
];

var RecordRef = firebase.database().ref();
const fetchData = () => new Promise((resolve, reject) => {
    const arrayTemp = []
    RecordRef.on("value", function(snapshot) {
        snapshot.forEach(function(data) {
          arrayTemp.push({
            key: data.key,
            game: `${data.val().game}`,
            prize: `${data.val().prize}`,
            team: `${data.val().team}`,
            score: `${data.val().score}`
          });
        });
        return resolve(arrayTemp);
      });
})

class RecordBoard extends Component {
  constructor(props){
    super(props);
    this.state  = {
      array: [],
    }
  }

  componentDidMount = async () => {
    const data = await fetchData()
    return this.setState({array:data.reverse()})
  }

  render() {
    return (
      <div>
        <Table
          columns={columns}
          dataSource={this.state.array}
          pagination={{ pageSize: 10 }}
          scroll={{ y: 250 }}
          locale={{emptyText: 'Wait for Record'}}
        />
      </div>
    );
  }
}
export default RecordBoard;
