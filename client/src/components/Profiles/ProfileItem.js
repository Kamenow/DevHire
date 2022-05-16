import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button, Card } from 'antd';

import './ProfileItem.css';
import { CheckOutlined } from '@ant-design/icons';

const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    status,
    company,
    location,
    skills,
  },
}) => {
  return (
    <Card>
      <div className='profile-item'>
        <div className='profile-info-container'>
          <img src={avatar} alt='avatar' />
          <div className='profile-info'>
            <div>
              <h2>{name}</h2>
              <p>{status}</p>
              {company && <span>at {company}</span>}
              {location && <span> {location}</span>}
            </div>
            <Button type='primary' className='view-profile'>
              <Link to={`/profile/${_id}`}>View Profile</Link>
            </Button>
          </div>
        </div>
        <ul>
          {skills.slice(0, 4).map((skill, index) => (
            <li key={index} className='text-primary'>
              <CheckOutlined />
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileItem;
