import React from 'react';
import './Button.css';

function CustomButton(props) {
  const { text, onClick, fontSize} = props;
  
  const buttonStyle = {
    backgroundColor: '#E9F907',
    color: '#1D1D1D',
    padding: '8px 10px',
    borderRadius: '20px',
    border: 'none',
    cursor: 'pointer',
    fontSize: fontSize || 'inherit',
  };

  return (
    <button className='button' style={buttonStyle} onClick={onClick}>
      {text}
    </button>
  );
}

export default CustomButton;