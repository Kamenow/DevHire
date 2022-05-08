import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Form, Input, Button, Select } from 'antd';
import { connect } from 'react-redux';
import { createProfile, getCurrentProfile } from '../../actions/profile.js';

import './EditProfile.css';

const { Option } = Select;

const EditProfile = ({
  profile: { profile, loading },
  createProfile,
  getCurrentProfile,
}) => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  useEffect(() => {
    getCurrentProfile();

    form.setFieldsValue({
      company: loading || !profile.company ? '' : profile.company,
      website: loading || !profile.website ? '' : profile.website,
      location: loading || !profile.location ? '' : profile.location,
      status: loading || !profile.status ? '' : profile.status,
      githubusername:
        loading || !profile.githubusername ? '' : profile.githubusername,
      skills: loading || !profile.skills ? '' : profile.skills.join(', '),
      bio: loading || !profile.bio ? '' : profile.bio,
    });
  }, [loading]);

  const onFinish = (values) => {
    console.log('Success:', values);

    const submit = {
      bio: values.bio,
      company: values.company,
      githubusername: values.githubusername,
      location: values.location,
      skills: values.skills,
      status: values.status,
      website: values.website,
    };

    createProfile(submit, navigate, true);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <section className='create-profile'>
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
          label='Company'
          name='company'
          rules={[
            {
              required: true,
              message: 'Please input your Company!',
            },
          ]}
        >
          <Input placeholder='Could be your own company or one you work for' />
          {/* <small>Could be your own company or one you work for</small> */}
        </Form.Item>

        <Form.Item
          label='Website'
          name='website'
          rules={[
            {
              required: true,
              message: 'Please input your Website!',
            },
          ]}
        >
          <Input placeholder='Could be your own or a company' />
          {/* <small>Could be your own or a company</small> */}
        </Form.Item>

        <Form.Item
          label='Location'
          name='location'
          rules={[
            {
              required: true,
              message: 'Please input your Location!',
            },
          ]}
        >
          <Input placeholder='City and Area (eg. Trustenik Pleven)' />
          {/* <small>City and Area (eg. Trustenik Pleven)</small> */}
        </Form.Item>

        <Form.Item
          label='Status'
          name='status'
          rules={[
            {
              required: true,
              message: 'Please input your Status!',
            },
          ]}
        >
          <Select
            placeholder='Select a option and change input text above'
            allowClear
          >
            <Option value='Junior'>Junior</Option>
            <Option value='Mid'>Mid</Option>
            <Option value='Senior'>Senior</Option>
          </Select>
          {/* <Input placeholder='Status' /> */}
          {/* <small>Could be your own or a company</small> */}
        </Form.Item>

        <Form.Item
          label='Skills'
          name='skills'
          rules={[
            {
              required: true,
              message: 'Please input your Skills!',
            },
          ]}
        >
          <Input placeholder='Coma separated skills (HTML, CSS, JS)' />
          {/* <small>Coma separated skills (HTML, CSS, JS)</small> */}
        </Form.Item>

        <Form.Item
          label='GitHubUsername'
          name='githubusername'
          rules={[
            {
              required: true,
              message: 'Please input your GitHubUsername!',
            },
          ]}
        >
          <Input
            placeholder='If you want your latest Github repos displayed, include your
            username'
          />
          {/* <small>
            If you want your latest Github repos displayed, include your
            username
          </small> */}
        </Form.Item>

        <Form.Item
          label='Bio'
          name='bio'
          rules={[
            {
              required: true,
              message: 'Please input your Bio!',
            },
          ]}
        >
          <Input placeholder='A short bio of yourself' />
          {/* <small>A short bio of yourself</small> */}
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

EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  EditProfile
);
