import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addExperience } from '../../actions/profile.js';
import { Form, Input, Button, DatePicker, Checkbox } from 'antd';

import './AddExperience.css';

const AddExperience = ({ addExperience }) => {
  const [isChecked, setIsChecked] = useState();
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onCheck = (e) => {
    setIsChecked(e.target.checked);
  };

  const onFinish = (values) => {
    console.log('Success:', values);

    addExperience(
      {
        title: values.jobTitle,
        company: values.company,
        location: values.location,
        from: values.fromDate,
        to: values.toDate,
        current: values.current,
        description: values.jobDescription,
      },
      navigate
    );
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <section className='add-experience'>
      <Form
        form={form}
        name='basic'
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete='off'
      >
        <Form.Item
          label='Job Title'
          name='jobTitle'
          rules={[
            {
              required: true,
              message: 'Please input your job title!',
            },
          ]}
        >
          <Input placeholder='Job Title' />
        </Form.Item>

        <Form.Item
          label='Company'
          name='company'
          rules={[
            {
              required: true,
              message: 'Please input your company!',
            },
          ]}
        >
          <Input placeholder='Company' />
        </Form.Item>

        <Form.Item label='Location' name='location'>
          <Input placeholder='Location' />
        </Form.Item>

        <Form.Item
          label='From Date'
          name='fromDate'
          rules={[
            {
              required: true,
              message: 'Please input your date!',
            },
          ]}
        >
          <DatePicker />
        </Form.Item>

        <Form.Item
          name='currentjob'
          valuePropName='checked'
          onChange={onCheck}
          className='checkbox-container'
        >
          <Checkbox>Current Job</Checkbox>
        </Form.Item>

        <Form.Item label='To Date' name='toDate'>
          <DatePicker disabled={isChecked} />
        </Form.Item>

        <Form.Item label='Job Description' name='jobDescription'>
          <Input.TextArea placeholder='Job Description' />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </section>
  );
};

AddExperience.propTypes = {
  addExperience: PropTypes.func.isRequired,
};

export default connect(null, { addExperience })(AddExperience);
