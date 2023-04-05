import React from 'react';
import './Button.css';

function CustomButton(props) {
  const { text, onClick } = props;
  
  const buttonStyle = {
    backgroundColor: '#E9F907',
    color: '#1D1D1D',
    padding: '10px 10px',
    borderRadius: '6px',
    border: 'none',
    cursor: 'pointer',
  };

  return (
    <button className='button' style={buttonStyle} onClick={onClick}>
      {text}
    </button>
  );
}

export default CustomButton;