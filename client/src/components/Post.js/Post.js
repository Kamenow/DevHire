import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { List, Spin } from 'antd';

import { getPost } from '../../actions/post.js';
import PostItem from '../Posts/PostItem.js';
import CommentForm from './CommentForm.js';
import Comments from './Comments.js';

import './Post.css';

const Post = ({ getPost, post: { loading, post } }) => {
  const { id } = useParams();

  useEffect(() => {
    getPost(id);
  }, [getPost, id]);

  return (
    <Fragment>
      {loading || (!post && <Spin />)}
      {!loading && post && (
        <section className='single-post'>
          <PostItem post={post} showActions={false}></PostItem>
          <CommentForm postId={post._id}></CommentForm>
          <div className='comments'>
            {post.comments.map((comment) => (
              <Comments
                key={comment._id}
                comment={comment}
                postId={post._id}
              ></Comments>
            ))}
          </div>
        </section>
      )}
    </Fragment>
  );
};

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPost })(Post);
