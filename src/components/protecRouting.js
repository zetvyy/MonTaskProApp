import React from "react";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const Protected = ({ children }) => {
  const user = localStorage.getItem("id");

  if (user == null) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

Protected.propTypes = {
  children: PropTypes.object.isRequired,
};
export default Protected;
