// src/EmployeeDashboard.js
import React, { useState } from 'react';
import EmployeeForm from './EmployeeForm';
import EmployeeList from './EmployeeList';
import styled from 'styled-components';

const DashboardContainer = styled.div`
  text-align: center;
  padding: 20px;
  background-color: rgba(183, 156, 132, 0.847);

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const Heading = styled.h2`
  color: #333;
  font-size: 1.5em;

  @media (max-width: 600px) {
    font-size: 1.2em;
  }
`;

const EmployeeDashboard = () => {
  const [employees, setEmployees] = useState([]);

  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };

  return (
    <DashboardContainer>
      <Heading>Employee Dashboard</Heading>
      <EmployeeForm addEmployee={addEmployee} />
      <EmployeeList employees={employees} />
    </DashboardContainer>
  );
};

export default EmployeeDashboard;
