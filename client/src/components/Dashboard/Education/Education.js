import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Card, Table } from 'antd';

import './Education.css';

const Education = ({ education }) => {
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
      render: () => (
        <Button type='primary' danger>
          Delete
        </Button>
      ),
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
};

export default connect(null, null)(Education);
