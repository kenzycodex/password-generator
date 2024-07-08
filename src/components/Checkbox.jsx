import React from 'react';
import PropTypes from 'prop-types';

function Checkbox({ label, checked, onChange }) {
  const checkboxId = `checkbox-${label.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <div className='checkbox-container'>
      <input
        type="checkbox"
        className="checkbox"
        id={checkboxId}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <label htmlFor={checkboxId}>{label}</label>
    </div>
  );
}

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Checkbox;
