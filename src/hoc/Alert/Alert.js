import React from 'react';
import { connect } from 'react-redux';

import './Alert.css';

const Alert = ({ alerts }) => {
  return (
    alerts !== null &&
    alerts.length > 0 &&
    alerts.map((alert) => (
      <div key={alert.id} className={`Alert Alert__${alert.alertType}`}>
        {alert.alertMsg}
      </div>
    ))
  );
};

const mapStateToProps = (state) => ({
  alerts: state.validators,
});

export default connect(mapStateToProps)(Alert);
