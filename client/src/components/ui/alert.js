import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Alert = ({alerts}) => alerts !== null && alerts.length>0 && alerts.map(alert => (
    //can use dynamic classnames to stylize 
    <div key={alert.id} className={alert.alertType}>
        {alert.msg}
    </div>
))


Alert.propTypes = {
  alerts: PropTypes.object.isRequired,
  setAlert: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(Alert);
