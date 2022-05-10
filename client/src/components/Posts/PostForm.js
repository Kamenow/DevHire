import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../../actions/post.js';

import './PostForm.css';
import { Button, Form, Input } from 'antd';

const PostForm = ({ addPost }) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Success:', values);

    addPost(values);
    form.resetFields();
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <section className='post-form'>
      <h2>Share Your toughts...</h2>
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
      >
        <Form.Item
          name='text'
          rules={[
            {
              required: true,
              message: 'Please input some text!',
            },
          ]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item className='center-button'>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </section>
  );
};

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
};

export default connect(null, { addPost })(PostForm);
