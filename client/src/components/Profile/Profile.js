import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Card, Spin } from 'antd';
import { getProfileById } from '../../actions/profile.js';
import ProfileTop from './ProfileTop.js';

import './Profile.css';
import ProfileAbout from './ProfileAbout.js';
import ProfileExperience from './ProfileExperience.js';
import ProfileEducation from './ProfileEducation.js';
import ProfileGithub from './ProfileGithub.js';

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
          <Card>
            <div className='profile-experience'>
              <h2>Experience</h2>
              {profile.experience.length > 0 ? (
                <Fragment>
                  {profile.experience.map((experience) => (
                    <ProfileExperience
                      key={experience._id}
                      experience={experience}
                    />
                  ))}
                </Fragment>
              ) : (
                <p>No experience</p>
              )}
            </div>
          </Card>
          <Card>
            <div className='profile-education'>
              <h2>Education</h2>
              {profile.education.length > 0 ? (
                <Fragment>
                  {profile.experience.map((education) => (
                    <ProfileEducation
                      key={education._id}
                      education={education}
                    />
                  ))}
                </Fragment>
              ) : (
                <p>No Education</p>
              )}
            </div>
          </Card>
          <Card>
            {profile.githubusername && (
              <ProfileGithub username={profile.githubusername} />
            )}
          </Card>
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
