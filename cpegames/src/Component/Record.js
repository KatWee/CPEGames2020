import React, { Component } from "react";
import { Table } from "antd";

const columns = [
  {
    title: "Game",
    dataIndex: "game"
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

const data = [];
for (let i = 0; i < 20; i++) {
  data.push({
    key: i,
    game: `game ${i}`,
    team: `team ${i}`,
    score: i
  });
}

class RecordBoard extends Component {
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
export default RecordBoard;
