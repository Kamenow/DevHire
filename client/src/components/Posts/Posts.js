import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card, Spin } from 'antd';

import { getPosts } from '../../actions/post.js';

import './Posts.css';
import PostItem from './PostItem.js';
import PostForm from './PostForm.js';

const Posts = ({ getPosts, post: { posts, loading } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return loading ? (
    <div className='top'>
      <Spin />
    </div>
  ) : (
    <Fragment>
      <PostForm />
      <div className='posts'>
        <h1>Posts</h1>
        {posts.map((post) => (
          <PostItem key={post._id} post={post}></PostItem>
        ))}
      </div>
    </Fragment>
  );
};

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPosts })(Posts);
