import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { Button, Card } from 'antd';
import { addLike, deletePost, removeLike } from '../../actions/post.js';

import './PostItem.css';

const PostItem = ({
  auth,
  post: { _id, text, name, avatar, user, likes, comments, date },
  addLike,
  removeLike,
  deletePost,
}) => {
  return (
    <Card className='wid'>
      <div className='post-item'>
        <div className='user'>
          <Link to={`/profile/${user}`}>
            <img src={avatar} alt='' />
          </Link>
          <h2>{name}</h2>
        </div>
        <div className='content-action-wrapper'>
          <div className='post-content'>
            <Moment className='date' format='YYYY/MM/DD'>
              {date}
            </Moment>
            <p>{text}</p>
          </div>
          <div className='button-wrapper'>
            <Button type='primary' onClick={(e) => addLike(_id)}>
              Like {likes && likes.length}
            </Button>
            <Button onClick={(e) => removeLike(_id)}>Unlike</Button>
            <Button type='primary'>
              Discuss {comments && comments.length}
            </Button>
            {!auth.loading && user === auth.user._id && (
              <Button type='primary' danger onClick={(e) => deletePost(_id)}>
                Delete
              </Button>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { addLike, removeLike, deletePost })(
  PostItem
);
