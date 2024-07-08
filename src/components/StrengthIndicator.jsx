import React from 'react';
import PropTypes from 'prop-types';
import StrengthBar from './StrengthBar';

function StrengthIndicator({ strength }) {
  const getStrengthText = () => {
    switch (strength) {
      case 1:
        return 'TOO WEAK!';
      case 2:
        return 'WEAK';
      case 3:
        return 'MEDIUM';
      case 4:
        return 'STRONG';
      default:
        return '';
    }
  };

  return (
    <div className="strength-container">
      <label htmlFor="strength">STRENGTH</label>
      <div className="strength-content">
        <span className="strength-text">{getStrengthText()}</span>
        <div className="strength-bar">
          {[...Array(4)].map((_, i) => (
            <StrengthBar key={i} filled={i < strength} />
          ))}
        </div>
      </div>
    </div>
  );
}

StrengthIndicator.propTypes = {
  strength: PropTypes.number.isRequired,
};

export default StrengthIndicator;
