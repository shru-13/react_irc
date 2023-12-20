// src/EmployeeList.js
import React from 'react';

const EmployeeList = ({ employees }) => {
  return (
    <div>
      <h3>Employee List</h3>
      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>
            <strong>{employee.name}</strong> - {employee.position}
          </li>
        ))}
      </ul>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </div>
  );
};

export default EmployeeList;
