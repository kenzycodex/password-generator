import React from 'react';
import PropTypes from 'prop-types';

function Slider({ length, setLength }) {
  const handleSliderChange = (e) => {
    setLength(e.target.value);
  };

  return (
    <form className="slider-container">
      <label htmlFor="length" id="character-length">
        Character length <span id="value">{length}</span>
      </label>
      <input
        type="range"
        id="myRange"
        className="slider"
        min="0"
        max="20"
        value={length}
        onChange={handleSliderChange}
      />
    </form>
  );
}

Slider.propTypes = {
  length: PropTypes.number.isRequired,
  setLength: PropTypes.func.isRequired,
};

export default Slider;
