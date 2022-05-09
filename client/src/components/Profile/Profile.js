import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Card, Spin } from 'antd';
import { getProfileById } from '../../actions/profile.js';
import ProfileTop from './ProfileTop.js';

import './Profile.css';
import ProfileAbout from './ProfileAbout.js';

const Profile = ({ getProfileById, profile: { profile, loading }, auth }) => {
  const { id } = useParams();

  useEffect(() => {
    getProfileById(id);
  }, [getProfileById, id]);

  return (
    <section className='single-profile'>
      {profile === null || loading ? (
        <Spin />
      ) : (
        <Fragment>
          <div className='profile-button-wrapper'>
            <Link to='/profiles'>
              <Button type='primary'>Back To Profiles</Button>
            </Link>
            {auth.isAuthenticated &&
              auth.loading === false &&
              auth.user._id === profile.user._id && (
                <Link to='/edit-profile'>
                  <Button>Edit Profile</Button>
                </Link>
              )}
          </div>
          <ProfileTop profile={profile} />
          <ProfileAbout profile={profile} />
        </Fragment>
      )}
    </section>
  );
};

Profile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, { getProfileById })(Profile);
