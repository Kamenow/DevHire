import React, { Fragment, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Experience from './Experience/Experience.js';
import { Card, Descriptions, Empty, Image, Spin, Button } from 'antd';
import Education from './Education/Education.js';

import { getCurrentProfile, deleteAccount } from '../../actions/profile.js';

import './Dashboard.css';
import { CheckOutlined } from '@ant-design/icons';

const Dashboard = ({
  getCurrentProfile,
  deleteAccount,
  auth: { user },
  profile: { profile, loading },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return (
    <Fragment>
      {loading && <Spin />}
      {!loading && !profile && (
        <Fragment>
          <section className='create-profile-prompt'>
            <Link to='/create-profile'>No profile? Make one!</Link>
          </section>
        </Fragment>
      )}
      {!loading && profile && (
        <section className='dashboard'>
          <Card>
            <div className='center-image'>
              <Image width={200} src={user.avatar} />
            </div>
            <h2>{user.name}</h2>
            <Descriptions>
              <Descriptions.Item label='bio'>{profile.bio}</Descriptions.Item>
            </Descriptions>
          </Card>
          {profile ? (
            <Fragment>
              <Card>
                <Descriptions>
                  <Descriptions.Item label='Email'>
                    {user.email}
                  </Descriptions.Item>
                  <Descriptions.Item label='Company'>
                    {profile.company}
                  </Descriptions.Item>
                  <Descriptions.Item label='Location'>
                    {profile.location}
                  </Descriptions.Item>
                  <Descriptions.Item label='Github'>
                    {profile.githubusername}
                  </Descriptions.Item>
                  <Descriptions.Item label='Status' className='status'>
                    {profile.status}
                  </Descriptions.Item>
                  <Descriptions.Item label='Skills' className='status'>
                    {profile.skills.splice(0, 4).join(', ')}...
                  </Descriptions.Item>
                </Descriptions>
              </Card>
              <Card className='skills-card'>
                <div className='skills'>
                  <h2>Skill Set</h2>
                  <ul>
                    {profile.skills.map((skill) => {
                      return (
                        <li key={skill}>
                          <CheckOutlined /> {skill}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </Card>
              {profile.experience.length > 0 ? (
                <Experience experience={profile.experience} />
              ) : (
                ''
              )}
              {profile.education.length > 0 ? (
                <Education education={profile.education} />
              ) : (
                ''
              )}
              <Card>
                <div className='button-wrapper'>
                  <Button type='primary'>
                    <Link to='/edit-profile'>Edit-Profile</Link>
                  </Button>
                  <Button type='primary'>
                    <Link to='/add-experience'>Add Experience</Link>
                  </Button>
                  <Button type='primary'>
                    <Link to='/add-education'>Add Education</Link>
                  </Button>
                  <Button type='primary' danger onClick={() => deleteAccount()}>
                    Delete Account
                  </Button>
                </div>
              </Card>
            </Fragment>
          ) : (
            <Fragment>
              <Empty
                description={
                  <span>
                    No profile yet 😢 <a href='#API'>Make one 🤔</a>
                  </span>
                }
              />
            </Fragment>
          )}
        </section>
      )}
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  Dashboard
);
