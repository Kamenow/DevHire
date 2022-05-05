import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card, Descriptions, Empty, Image, Spin } from 'antd';

import { getCurrentProfile } from '../../actions/profile.js';

import './Dashboard.css';

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
      {loading && <Spin />}
      {!loading && (
        <section className='dashboard'>
          <Card>
            <Image width={200} src={user.avatar} />
            <h2>{user.name}</h2>
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
              <Card></Card>
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
