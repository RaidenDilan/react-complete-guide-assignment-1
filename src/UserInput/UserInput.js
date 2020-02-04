import React from 'react';
import './UserInput.css';

const userInput = (props) => {
  // Inline Style
  const inputStyle = {
    border: '2px solid #000',
    margin: '16px auto',
    padding: '8px 13px',
    textAlign: 'center',
    outline: 'none',
    fontSize: '12px'
  };

  return (
    <div className="UserInput">
      <input
        style={ inputStyle }
        type="text"
        onChange={ props.changed }
        value={ props.currentName }
        />
    </div>
  );
};

export default userInput;
