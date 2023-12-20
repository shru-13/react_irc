// src/EmployeeForm.js
import React, { useState } from 'react';

const EmployeeForm = ({ addEmployee }) => {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');

  const formStyle = {
    textAlign: 'center',
    margin: '20px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    backgroundColor: '#f5e1ced8',
  };

  const labelStyle = {
    display: 'block',
    margin: '10px 0',
  };

  const inputStyle = {
    width: '100%',
    padding: '8px',
    borderRadius: '20px',
    border: '1px solid #ccc',
  };

  const buttonStyle = {
    marginTop: '10px',
    padding: '8px 16px',
    backgroundColor: '#211203e7',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s', 
    ':hover': {
      backgroundColor: 'rgba(132, 103, 75, 0.847)',
    },
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && position) {
      const newEmployee = {
        id: Date.now(),
        name,
        position,
      };

      addEmployee(newEmployee);
      setName('');
      setPosition('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <h3>Add Employee</h3>
      <label style={labelStyle}>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} style={inputStyle} />
      </label>
      <label style={labelStyle}>
        Position:
        <input type="text" value={position} onChange={(e) => setPosition(e.target.value)} style={inputStyle} />
      </label>
      <button type="submit" style={buttonStyle}>
        Add Employee
      </button>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </form>
  );
};

export default EmployeeForm;
