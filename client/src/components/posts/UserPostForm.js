import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PostItem from './PostItem';
import PostForm from './PostForm';


const UserPostForm = ({ post } ) => {

  return (
    <Fragment>
      <h1 className='large text-primary'>Posts</h1>
      <p className='lead'>
        <i className='fas fa-user' /> Welcome to the community
      </p>
      <PostForm />
      <Link to={`/posts-user`} className='btn btn-primary'>
          View Posts
        </Link>
      {/* <div className='posts'>
        {posts.map((post) => (
          <PostItem key={post._id} post={post} />
        ))}
      </div> */}

    </Fragment>
  );
};

UserPostForm.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
})

export default connect(mapStateToProps) (UserPostForm);