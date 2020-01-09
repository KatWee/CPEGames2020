import React, { Component } from "react";
import { Table } from "antd";
import CSS from "./AdminRecore.css"

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
  },
  {
    title: 'Edit',
    key: 'edit',
    render: (text, record) => (
      <span>
        <a className="TableLink">Edit</a>
      </span>
    ),
  },
  {
    title: 'Delete',
    key: 'delete',
    render: (text, record) => (
      <span>
        <a className="TableLink">Delete</a>
      </span>
    ),
  },
];

const data = [];
for (let i = 0; i < 20; i++) {
  data.push({
    key: i,
    record: `record ${i}`,
    team: `team ${i}`,
    score: i
  });
}

class AdminRecordBoard extends Component {
  render() {
    return (
      <div>
        <Table
          columns={columns}
          dataSource={data}
          pagination={{ pageSize: 10 }}
          scroll={{ y: 250 }}
        />
      </div>
    );
  }
}
export default AdminRecordBoard;
