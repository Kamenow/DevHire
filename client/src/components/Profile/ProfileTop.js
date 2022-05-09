import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';

import './ProfileTop.css';

const ProfileTop = ({
  profile: {
    status,
    company,
    location,
    website,
    social,
    user: { name, avatar },
  },
}) => {
  console.log(website);

  return (
    <Card className='blue-back'>
      <div className='profile-top'>
        <img src={avatar} alt='avatar' />
        <h1>{name}</h1>
        <div className='company-location'>
          <p>
            {status} {company && <span>at {company}</span>}
          </p>
          <small>{location}</small>
        </div>
        {website && (
          <a href={website} target='_blank' rel='noopener noreferrer'>
            {website}
          </a>
        )}
      </div>
    </Card>
  );
};

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileTop;
