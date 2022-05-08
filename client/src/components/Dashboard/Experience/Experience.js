import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Card, Table } from 'antd';
import { deleteExperience } from '../../../actions/profile.js';

import './Experience.css';

const Experience = ({ experience, deleteExperience }) => {
  const experiences = experience;

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
    },
    {
      title: 'Company',
      dataIndex: 'company',
    },
    {
      title: 'Location',
      dataIndex: 'location',
      render: (location) => {
        return <Fragment>{location ? location : 'Location Not Set'}</Fragment>;
      },
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
          <Button type='primary' danger onClick={() => deleteExperience(id)}>
            Delete
          </Button>
        );
      },
    },
  ];

  return (
    <Card className='max-width'>
      <h2>Experience Credentials</h2>
      <Table dataSource={experiences} columns={columns} bordered></Table>
    </Card>
  );
};

Experience.propTypes = {
  experience: PropTypes.array.isRequired,
  deleteExperience: PropTypes.func.isRequired,
};

export default connect(null, { deleteExperience })(Experience);
