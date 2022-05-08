import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addEducation } from '../../actions/profile.js';
import { Form, Input, Button, DatePicker, Checkbox } from 'antd';

import './AddEducation.css';

const AddEducation = ({ addEducation }) => {
  const [isChecked, setIsChecked] = useState();
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onCheck = (e) => {
    setIsChecked(e.target.checked);
  };

  const onFinish = (values) => {
    console.log('Success:', values);

    addEducation(
      {
        school: values.school,
        degree: values.degree,
        fieldofstudy: values.fieldOfStudy,
        from: values.fromDate,
        to: values.toDate,
        current: values.currentjob,
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
          label='School'
          name='school'
          rules={[
            {
              required: true,
              message: 'Please input your school!',
            },
          ]}
        >
          <Input placeholder='School' />
        </Form.Item>

        <Form.Item
          label='Degree'
          name='degree'
          rules={[
            {
              required: true,
              message: 'Please input your degree!',
            },
          ]}
        >
          <Input placeholder='Degree' />
        </Form.Item>

        <Form.Item
          label='Field Of Study'
          name='fieldOfStudy'
          rules={[
            { required: true, message: 'Please input your field of study!' },
          ]}
        >
          <Input placeholder='Field Of Study' />
        </Form.Item>

        <Form.Item
          label='From Date'
          name='fromDate'
          rules={[
            {
              required: true,
              message: 'Please input your company!',
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
          <Checkbox>Current Study</Checkbox>
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

AddEducation.propTypes = {
  addEducation: PropTypes.func.isRequired,
};

export default connect(null, { addEducation })(AddEducation);
