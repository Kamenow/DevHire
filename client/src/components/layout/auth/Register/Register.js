import React from 'react';
import { connect } from 'react-redux';
import { Form, Input, Button } from 'antd';
import { Link, Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import { setAlert } from '../../../../actions/alert.js';
import { register } from '../../../../actions/auth.js';

import './Register.css';

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    if (values.password !== values.repassword) {
      setAlert('Passwords do not match', 'danger');
      return;
    }

    register({
      name: values.name,
      email: values.email,
      password: values.password,
    });
    form.resetFields();
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  if (isAuthenticated) {
    return <Navigate to='/' />;
  }

  return (
    <section className='register'>
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
          label='Email'
          name='email'
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your email!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label='Name'
          name='name'
          rules={[
            {
              required: true,
              message: 'Please input your name!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label='Password'
          name='password'
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label='Repeat password'
          name='repassword'
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Link to='/login'>Already have an account 😎 Login!</Link>

          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </section>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(Register);
