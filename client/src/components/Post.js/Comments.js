import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Comment, Tooltip } from 'antd';
import { connect } from 'react-redux';

import './Comments.css';
import { deleteComment } from '../../actions/post.js';

const Comments = ({
  postId,
  comment: { _id, text, name, avatar, user, date },
  auth,
  deleteComment,
}) => {
  const actions = [
    <Fragment>
      {!auth.loading && user === auth.user._id && (
        <Tooltip key='comment-basic-like' title='delete'>
          <Button onClick={(e) => deleteComment(postId, _id)}>Delete</Button>
        </Tooltip>
      )}
    </Fragment>,
  ];

  return (
    <Card>
      <li key={_id}>
        <Comment
          author={name}
          avatar={avatar}
          content={text}
          datetime={date}
          actions={actions}
        />
      </li>
    </Card>
  );
};

Comments.propTypes = {
  postId: PropTypes.number.isRequired,
  comment: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteComment: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { deleteComment })(Comments);
