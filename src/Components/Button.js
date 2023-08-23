import React from 'react';

const Button = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '10px 20px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
      }}
    >
      {label}
    </button>
  );
};

export default Button;
