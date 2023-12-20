import React from 'react';
import styled from 'styled-components';
import EmployeeDashboard from './EmployeeDashboard';



const AppHeader = styled.header`
  background-color: rgba(32, 19, 7, 0.847);
  padding: 20px; 
  color: white;
`;

function Dashboard() {
  return (
    <>
      <AppHeader>
        <h1>Employee Dashboard</h1>
      </AppHeader>
      <main>
        <EmployeeDashboard />
      </main>
      </>
  );
}

export default Dashboard;
