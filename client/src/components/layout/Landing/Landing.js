import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './Landing.css';

const Landing = ({ isAuthenticated }) => {
  return (
    <section className='landing'>
      <div className='overlay'></div>
      <div className='info'>
        <h1>DevHire</h1>
        <p>Find the perfect developer for you</p>
      </div>
      <img
        src='https://www.springboard.com/blog/wp-content/uploads/2021/03/Women-Who-Code-scaled.jpg'
        alt=''
      />
    </section>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);
