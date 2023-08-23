import React from 'react';

const Select = ({ label, value, onChange, optionList }) => {
  return (
    <div style={{ marginBottom: '10px', width: '100%' }}>
      <label>{label}</label>
      <select
        value={value}
        onChange={onChange}
        style={{ padding: '8px', width: '100%' }}
      >
        {optionList.map((option, i) => (
          <option key={i} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
