import React from 'react';
import PropTypes from 'prop-types';

function StrengthBar({ filled }) {
  return <div className="bar" style={{ backgroundColor: filled ? '#A4FFAF' : 'transparent' }}></div>;
}

StrengthBar.propTypes = {
  filled: PropTypes.bool.isRequired,
};

export default StrengthBar;
