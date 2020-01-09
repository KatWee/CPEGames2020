import React, { Component } from "react";
import { Form,
    Select,
    Input,
    Button,
    Col,
} from 'antd';
import FromCSS from "./Form.css";
const formItemLayout ={
            labelCol: { span: 4 },
            wrapperCol: { span: 18 },
          }
const { Option } = Select;

class ScoreForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      game:'',
      prize:'',
      team:'',
      score:null,
    };
  }

  ChangeHandler = (event) => {
    console.log(event.target.name);
    console.log(event.target.value);
    let Name = event.target.name;
    let Value = event.target.value;
    console.log(Name);
    console.log(Value);
    this.setState({[Name]: Value});
    console.log(this.state);
  }

  ChangeGame = (event) => {
    console.log(event.target.name);
    console.log(event.target.value);
    this.setState({game: event.target.value});
    console.log(this.state);
  }

  SubmitHandler = (event) => {
    event.preventDefault();
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <Form>
          <Form.Item label="Game" {...formItemLayout}>
            <Input placeholder="CPE Game"  name="game" onChange={this.ChangeGame}/>
          </Form.Item>
          <Form.Item label="Prize" hasFeedback {...formItemLayout}>
            <Select placeholder="Prize for game" name='prize' onChange={this.ChangeHandler}>
              <Option value="1">1st Prize</Option>
              <Option value="2">2nd Prize</Option>
              <Option value="3">3rd Prize</Option>
              <Option value="4">Attended</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Team" hasFeedback {...formItemLayout}>
            <Select placeholder="Angel Or Devil Team"
            name='team'
            onChange={this.ChangeHandler}
            >
              <Option value="angel">Angel : Odd</Option>
              <Option value="devil">Devil : Even</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Score" {...formItemLayout}>
            <Input type="number" name='score' onChange={this.ChangeHandler}/>
          </Form.Item>
          <Col span={18}></Col>
          <Col span={6}>
          <Form.Item>
          <Button type="primary" onClick={this.SubmitHandler}>
            Submit
          </Button>
        </Form.Item>
        </Col>
        </Form>
      </div>
    );
  }
}
export default ScoreForm;
