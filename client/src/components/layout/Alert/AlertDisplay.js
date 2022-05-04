import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Alert } from 'antd';

import './AlertDisplay.css';

const AlertDisplay = ({ alerts }) => {
  return (
    alerts !== null &&
    alerts.length > 0 &&
    alerts.map((alert) => {
      return (
        <Alert
          message={alert.msg}
          type={alert.alertType === 'danger' ? 'error' : 'success'}
          showIcon
          key={alert.id}
        />
      );
    })
  );
};

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(AlertDisplay);
