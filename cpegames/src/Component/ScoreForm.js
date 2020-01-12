import React, { Component } from "react";
import { Form,
    Select,
    Input,
    Button,
    Col,
} from 'antd';
import FromCSS from "./Form.css";
import firebase from "firebase";

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
      timeStamp:'',
    };
    this.ChangeGame = this.ChangeGame.bind(this);
    this.ChangePrize = this.ChangePrize.bind(this);
    this.ChangeTeam = this.ChangeTeam.bind(this);
    this.ChangeScore = this.ChangeScore.bind(this)
    this.SubmitHandler = this.SubmitHandler.bind(this)
  }

  ChangeGame = (event) => {
    //console.log("game "+event.target.value);
    this.props.form.setFieldsValue({
      ['game']: event.target.value,
  });
  }

  ChangePrize = (event) => {
    const { getFieldsValue } = this.props.form;
    setTimeout(function(){
      const Value = getFieldsValue();
      //console.log(Value.prize);
    },0)
  }

  ChangeTeam = (event) => {
    const { getFieldsValue } = this.props.form;
    setTimeout(function(){
      const Value = getFieldsValue();
      //console.log(Value.Team);
    },0)
  }

  ChangeScore = (event) => {
    //console.log("score "+event.target.value);
    this.props.form.setFieldsValue({
      ['score']: event.target.value,
  });
  }

  SubmitHandler = (event) => {
    event.preventDefault();
    console.log(this.props.form.getFieldsValue());
    const RecordRef = firebase.database().ref();
    const Record ={
      game: this.props.form.getFieldsValue().game,
      prize: this.props.form.getFieldsValue().prize,
      team: this.props.form.getFieldsValue().team,
      score: this.props.form.getFieldsValue().score,
    }
    RecordRef.push(Record);
    this.props.form.resetFields();
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Form onSubmit={this.SubmitHandler}>
          <Form.Item label="Game" {...formItemLayout}>
          {getFieldDecorator('game', {
            rules: [{ required: true, message: 'Please input game!' }],
            onChange:this.ChangeGame
          })(
            <Input placeholder="CPE Game" name="game"/>
          )}
          </Form.Item>
          <Form.Item label="Prize" hasFeedback {...formItemLayout}>
          {getFieldDecorator('prize', {
            rules: [{ required: true, message: 'Please Select Prize!' }],
          })(
          <Select placeholder="Prize for game" name='prize' onChange={this.ChangePrize}>
            <Option value="1st">1st Prize</Option>
            <Option value="2nd">2nd Prize</Option>
            <Option value="3rd">3rd Prize</Option>
            <Option value="Attended">Attended</Option>
          </Select>
        )}
          </Form.Item>
          <Form.Item label="Team" hasFeedback {...formItemLayout}>
          {getFieldDecorator('team', {
            rules: [{ required: true, message: 'Please Select Team!' }],
          })(
          <Select placeholder="Angel Or Devil Team" name='team' onChange={this.ChangeTeam}>
              <Option value="Angel">Angel : Odd</Option>
              <Option value="Devil">Devil : Even</Option>
            </Select>
          )}

          </Form.Item>
          <Form.Item label="Score" {...formItemLayout}>
          {getFieldDecorator('score', {
            rules: [{ required: true, message: 'Please input Score!' }],
            onChange:this.ChangeScore
          })(<Input type="number" name='score'/>
          )}
          </Form.Item>
          <Col span={18}></Col>
          <Col span={6}>
          <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
        </Col>
        </Form>
      </div>
    );
  }
}
export default Form.create()(ScoreForm);
