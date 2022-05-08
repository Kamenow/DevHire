import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Experience from './Experience/Experience.js';
import { Card, Descriptions, Empty, Image, Spin, Button } from 'antd';

import { getCurrentProfile } from '../../actions/profile.js';

import './Dashboard.css';
import Education from './Education/Education.js';

const Dashboard = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, []);

  console.log(user);
  console.log(profile);

  return (
    <Fragment>
      {loading && <Spin size='large' />}
      {!loading && (
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
                  <Descriptions.Item label='Telephone'>
                    1810000000
                  </Descriptions.Item>
                  <Descriptions.Item label='Live'>
                    Hangzhou, Zhejiang
                  </Descriptions.Item>
                  <Descriptions.Item label='Remark'>empty</Descriptions.Item>
                  <Descriptions.Item label='Address'>
                    No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang,
                    China
                  </Descriptions.Item>
                </Descriptions>
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
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
