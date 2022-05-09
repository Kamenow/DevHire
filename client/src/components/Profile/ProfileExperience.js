import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

import './ProfileExperience.css';
import { Card } from 'antd';

const ProfileExperience = ({
  experience: { company, title, location, current, from, to, description },
}) => {
  return (
    <Card>
      <div className='experience'>
        <h3>{company}</h3>
        <Moment format='YYYY/MM/DD'>{from}</Moment> -{' '}
        {!to ? 'now' : <Moment format='YYYY/DD/MM'>{to}</Moment>}
        <p>
          <strong>Position: </strong>
          {title}
        </p>
        <p>
          <strong>Description: </strong>
          {description}
        </p>
      </div>
    </Card>
  );
};

ProfileExperience.propTypes = {
  experience: PropTypes.array.isRequired,
};

export default ProfileExperience;
