// src/LeaveRequestApp.js
import React, { useState } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const LeaveRequestContainer = styled.div`
  max-width: 80%;
  margin: 50px auto;
  padding: 20px;
  color: rgba(33, 22, 11, 0.847);
  border: 1px solid #ddd;
  border-radius: 10px;
  justify-content: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  height: 80vh; /* 80% of the viewport height */
  background: #603813;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to bottom, #b29f94, #603813);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to bottom, #b29f94, #603813); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  

  @media (max-width: 768px) {
    height: auto;
  }
`;

const LeaveForm = styled.div`
  margin-bottom: 20px;
  align-items: center;
  justify-content: center;

`;

const LeaveInput = styled.input`
  padding: 8px;
  border-radius: 20px;
  margin-right: 10px;
  width: calc(100% - 18px); /* Adjust for padding and margin */
  box-sizing: border-box;
`;

const DatePickerContainer = styled.div`
  margin-top: 10px;
  border-radius: 30px;

//   .react-datepicker-wrapper,
//   .react-datepicker__input-container,
//   .react-datepicker__input-container input {
//     width: 100%;
    border-radius: 30px;
    // border: 1px solid #ddd;
    padding: 8px;
    box-sizing: border-box;
  }
`;

const Date = styled.div`
  border-radius: 30px;
`;

const LeaveList = styled.div`
  h2 {
    margin-bottom: 10px;
    color: rgba(33, 22, 11, 0.847);
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;
  }
`;

const Button = styled.div`
  background-color: rgba(52, 31, 14, 0.847);
  color: white;
  padding: 10px 20px;
  border-radius: 20px;
  text-align: center;
  cursor: pointer;
  
`;

const LeaveRequestApp = () => {
  const [leaveRequests, setLeaveRequests] = useState([]);
  const [newRequest, setNewRequest] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);

  const addLeaveRequest = () => {
    if (newRequest.trim() !== '' && selectedDate) {
      setLeaveRequests([...leaveRequests, { text: newRequest, status: 'Pending', date: selectedDate }]);
      setNewRequest('');
      setSelectedDate(null);
    }
  };

  return (
    <LeaveRequestContainer>
      <h1>Leave Request </h1>
      <LeaveForm>
        <LeaveInput
          type="text"
          value={newRequest}
          onChange={(e) => setNewRequest(e.target.value)}
          placeholder="Enter your leave request"
        />
        <br />
        <br />
        <Date>
          <DatePickerContainer>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              placeholderText="Select leave date"
            />
          </DatePickerContainer>
        </Date>
        <br />
        <Button onClick={addLeaveRequest}>Submit</Button>
      </LeaveForm>
      <LeaveList>
        <h2>Status of Request</h2>
        <ul>
          {leaveRequests.map((request, index) => (
            <li key={index}>
              {request.text} - Status: {request.status} - Date: {request.date && request.date.toLocaleDateString()}
            </li>
          ))}
        </ul>
      </LeaveList>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </LeaveRequestContainer>
  );
};

export default LeaveRequestApp;
