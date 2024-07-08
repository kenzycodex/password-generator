import React from 'react';
import PropTypes from 'prop-types';

function PasswordContent({ password, onCopy, copyMessage }) {
  return (
    <div className="password-content">
      <input type="text" className="password" value={password} readOnly placeholder="P4$5W0rD !" />
      <i className="fa-regular fa-copy" onClick={onCopy}></i>
      {copyMessage && <span id="copy-message">Copied</span>}
    </div>
  );
}

PasswordContent.propTypes = {
  password: PropTypes.string.isRequired,
  onCopy: PropTypes.func.isRequired,
  copyMessage: PropTypes.bool,
};

export default PasswordContent;
