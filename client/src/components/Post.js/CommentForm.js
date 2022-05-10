import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Button } from 'antd';

import { addComment } from '../../actions/post.js';
import { connect } from 'react-redux';

import './CommentForm.css';

const CommentForm = ({ postId, addComment }) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Success:', values);

    addComment(postId, values);
    form.resetFields();
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <section className='comment-form'>
      <h2>Leave a comment...</h2>
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

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired,
};

export default connect(null, { addComment })(CommentForm);
