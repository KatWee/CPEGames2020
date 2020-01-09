import React, { Component } from "react";
import { Table } from "antd";
import firebase from "firebase";

const columns = [
  {
    title: "Record",
    dataIndex: "record"
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

const array = [];
var RecordRef = firebase.database().ref();
    RecordRef.on("value", function(snapshot) {
      snapshot.forEach(function(data) {
        // console.log(
        //   "game"+data.val().game+
        //   "prize"+data.val().prize+
        //   "team"+data.val().team+
        //   "score"+data.val().score
        //   );
        array.push({
          record: `${data.val().prize} Prize ${data.val().game}`,
          team: `${data.val().team}`,
          score: `${data.val().score}`
        },);
      });
    });

// for (let i = 0; i < 20; i++) {
//   data.push({
//     key: i,
//     record: `record ${i}`,
//     team: `team ${i}`,
//     score: i
//   });
// }

class RecordBoard extends Component {
  render() {
    console.log(array);
    return (
      <div>
        <Table
          columns={columns}
          dataSource={array}
          pagination={{ pageSize: 10 }}
          scroll={{ y: 250 }}
        />
      </div>
    );
  }
}
export default RecordBoard;
