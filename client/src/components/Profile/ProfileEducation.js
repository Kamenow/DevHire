import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

import './ProfileEducation.css';
import { Card } from 'antd';

const ProfileEducation = ({
  education: { school, degree, fieldofstudy, current, from, to, description },
}) => {
  return (
    <Card>
      <div className='experience'>
        <h3>{school}</h3>
        <Moment format='YYYY/MM/DD'>{from}</Moment> -{' '}
        {!to ? 'now' : <Moment format='YYYY/DD/MM'>{to}</Moment>}
        <p>
          <strong>Degree: </strong>
          {degree}
        </p>
        <p>
          <strong>Field Of Study: </strong>
          {fieldofstudy}
        </p>
        <p>
          <strong>Description: </strong>
          {description}
        </p>
      </div>
    </Card>
  );
};

ProfileEducation.propTypes = {
  education: PropTypes.array.isRequired,
};

export default ProfileEducation;
