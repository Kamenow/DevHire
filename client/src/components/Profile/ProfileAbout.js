import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';

import './ProfileAbout.css';
import { CheckOutlined } from '@ant-design/icons';

const ProfileAbout = ({
  profile: {
    bio,
    skills,
    user: { name },
  },
}) => {
  return (
    <Fragment>
      <Card>
        <div className='profile-about'>
          {bio && (
            <Fragment>
              <div className='bio'>
                <h2>{name.trim().split(' ')[0]}'s Bio</h2>
                <p>{bio}</p>
              </div>
            </Fragment>
          )}
        </div>
      </Card>
      <Card>
        <div className='skills'>
          <h2>Skill Set</h2>
          <ul>
            {skills.map((skill) => {
              return (
                <li key={skill}>
                  <CheckOutlined /> {skill}
                </li>
              );
            })}
          </ul>
        </div>
      </Card>
    </Fragment>
  );
};

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileAbout;
