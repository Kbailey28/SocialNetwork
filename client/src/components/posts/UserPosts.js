import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PostItem from './PostItem';
import PostForm from './PostForm';
import { getUserPosts } from '../../actions/post';

const UserPosts = ({ getUserPosts, 
  post: { user, _id,
  posts }, auth,
   match, }) => {
  useEffect(() => {
    getUserPosts(match.params.id);
  }, [getUserPosts, match.params.id]);

  return (
    <Fragment>
      <h1 className='large text-primary'>Posts</h1>
      <p className='lead'>
        <i className='fas fa-user' /> Welcome to the community
      </p>
      <PostForm />
      <div className='posts'>
        {posts.map((post) => (
          <PostItem key={post._id} post={post} />
        ))}
      </div>
    </Fragment>
  );
};

UserPosts.propTypes = {
  getUserPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
  auth: state.auth,
});

export default connect(mapStateToProps, { getUserPosts })(UserPosts);