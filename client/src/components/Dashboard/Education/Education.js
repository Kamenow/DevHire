import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Card, Table } from 'antd';
import { deleteEducation } from '../../../actions/profile.js';

import './Education.css';

const Education = ({ education, deleteEducation }) => {
  const educations = education;

  const columns = [
    {
      title: 'School',
      dataIndex: 'school',
    },
    {
      title: 'Degree',
      dataIndex: 'degree',
    },
    {
      title: 'Field Of Study',
      dataIndex: 'fieldofstudy',
    },
    {
      title: 'From',
      dataIndex: 'from',
    },
    {
      title: 'To',
      dataIndex: 'to',
      render: (text) => {
        return <Fragment>{text ? text : 'Now'}</Fragment>;
      },
    },
    {
      title: 'Action',
      dataIndex: '_id',
      render: (id) => {
        return (
          <Button type='primary' danger onClick={() => deleteEducation(id)}>
            Delete
          </Button>
        );
      },
    },
  ];

  return (
    <Card className='max-width'>
      <h2>Education Credentials</h2>
      <Table dataSource={educations} columns={columns} bordered></Table>
    </Card>
  );
};

Education.propTypes = {
  education: PropTypes.array.isRequired,
  deleteEducation: PropTypes.func.isRequired,
};

export default connect(null, { deleteEducation })(Education);
