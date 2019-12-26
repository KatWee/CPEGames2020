import React, { Component } from "react";
import { Form,
    Select,
    Input,
    Button,
    Row,
    Col,
} from 'antd';
import FromCSS from "./Form.css"
const formItemLayout ={
            labelCol: { span: 4 },
            wrapperCol: { span: 18 },
          }
const { Option } = Select;
class ScoreForm extends Component {
  render() {
    return (
      <div>
        <Form >
          <Form.Item label="Reward Name" {...formItemLayout}>
            <Input placeholder="Dog Vs Cat 1st Prize" />
          </Form.Item>
          <Form.Item label="Team" hasFeedback {...formItemLayout}>
            <Select placeholder="Angel Or Devil Team">
              <Option value="angel">Angel : Odd</Option>
              <Option value="devil">Devil : Even</Option>
            </Select>,
          </Form.Item>
          <Form.Item label="Score" {...formItemLayout}>
            <Input type="number"/>
          </Form.Item>
          <Col span={18}></Col>
          <Col span={6}>
          <Form.Item>
          <Button type="primary">
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
