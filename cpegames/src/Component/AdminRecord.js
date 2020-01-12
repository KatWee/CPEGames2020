import React, { Component } from "react";
import { Popconfirm, message, Table } from "antd";
import CSS from "./AdminRecore.css";
import firebase from "firebase";

var RecordRef = firebase.database().ref();
const fetchData = () =>
  new Promise((resolve, reject) => {
    const arrayTemp = [];
    RecordRef.on("value", function(snapshot) {
      snapshot.forEach(function(data) {
        arrayTemp.push({
          game: `${data.val().game}`,
          prize:`${data.val().prize}`,
          team: `${data.val().team}`,
          score: `${data.val().score}`,
          id: `${data.key}`,
        });
      });
      return resolve(arrayTemp);
    });
  });

function handleDelete (id) {
  var DelRef = firebase.database().ref(id);
  DelRef.remove()
  .then(function(){
    message.success("Deleted");
  })
  .catch(function(error){
    message.error("Delete Failed: "+error.message);
  })
};

function cancel(e) {
  console.log(e);
  message.error("Cancel");
}

class AdminRecordBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      array: []
    };
  }

  componentDidMount = async () => {
    const data = await fetchData();
    return this.setState({ array: data.reverse() });
  };

  render() {
    const columns = [
      {
        title: "Game",
        dataIndex: "game",
        editable: true,
      },
      {
        title: "Prize",
        dataIndex: "prize",
        editable: true,
      },
      {
        title: "Team",
        dataIndex: "team",
        editable: true,
      },
      {
        title: "Score",
        dataIndex: "score",
        editable: true,
      },
      {
        title: "Delete",
        key: "delete",
        render: (text, record) => (
          <span>
            <Popconfirm
              title="Are you sure delete this Record"
              onConfirm={() => handleDelete(record.id)}
              onCancel={cancel}
              okText="Delete"
              cancelText="Cancel"
            >
              <a className="TableLink">Delete</a>
            </Popconfirm>
          </span>
        )
      }
    ];
    return (
      <div>
        <Table
          columns={columns}
          dataSource={this.state.array}
          pagination={{ pageSize: 10 }}
          scroll={{ y: 250 }}
          locale={{ emptyText: "Wait for Record" }}
        />
      </div>
    );
  }
}
export default AdminRecordBoard;
