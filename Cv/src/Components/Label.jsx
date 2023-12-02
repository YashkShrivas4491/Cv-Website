import React from "react";
import PropTypes from "prop-types";
import './Hom.css';

const Label = ({ name, color }) => (
  <span className="label" style={{ backgroundColor: `#${color}` }}>
    {name}
  </span>
);

Label.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Label;
