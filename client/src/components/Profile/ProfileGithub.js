import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card, Spin } from 'antd';
import { getGithubRepos } from '../../actions/profile.js';

import './ProfileGithub.css';

const ProfileGithub = ({ username, getGithubRepos, repos }) => {
  useEffect(() => {
    getGithubRepos(username);
  }, [getGithubRepos, username]);

  return (
    <div className='profile-github'>
      <h2>Github Repos</h2>
      {repos === null ? (
        <Spin />
      ) : (
        repos.map((repo) => (
          <Card key={repo._id} className='card-width'>
            <div className='github-repos'>
              <h4>
                <a
                  href={repo.html_url}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {repo.name}
                </a>
              </h4>
              <div className='repo-info'>
                <ul>
                  <li>Stars: {repo.stargazers_count}</li>
                  <li>Watchers: {repo.watchers_count}</li>
                  <li>Forks: {repo.forks_count}</li>
                </ul>
              </div>
            </div>
          </Card>
        ))
      )}
    </div>
  );
};

ProfileGithub.propTypes = {
  getGithubRepos: PropTypes.func.isRequired,
  repos: PropTypes.array.isRequired,
  username: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  repos: state.profile.repos,
});

export default connect(mapStateToProps, { getGithubRepos })(ProfileGithub);
