import React from 'react';

const Input = ({ type, value, onChange,label }) => {
  return (
<>
    <label>{label}</label>
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder='Username'
      style={{ padding: '10px', marginBottom: '10px', width: '100%' }}
    />
    </>
  );
};

export default Input;
