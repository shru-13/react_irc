import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import db from '../assets/db.jpeg';
import c2 from '../assets/c2.webp';
import c3 from '../assets/c3.webp';

const LayoutContainer = styled.div`
  display: flex;
  min-height: 100vh; 
  background-color: rgba(183, 156, 132, 0.847);
`;

const SidePanelContainer = styled.div`
  width: 80px;
  background-color: rgba(33, 22, 11, 0.847);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;

  @media (max-width: 768px) {
    width: 100%;  
    height: auto;
    position: static;  
    transition: none; 
  }
`;


const ContentContainer = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContentText = styled.div`
  background-color: #9a8a75;
  color: rgba(52, 31, 14, 0.847);
  padding: 20px;
  border-radius: 10px;
`;

const Icon = styled.div`
  font-size: 24px;
  color: #fff;
  margin-bottom: 20px;
  cursor: pointer;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const CardHeading = styled.div`
  font-family: fantasy;
  letter-spacing: 1px;
  font-size: 40px;
  text-align:center;
`;

const Card = styled.div`
  flex: 1;
  min-width: 250px;
  background-color: antiquewhite;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const CardTitle = styled.h3`
  color: rgba(52, 31, 14, 0.847);
  letter-spacing:1px;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

`;

const CardContent = styled.p`
  color: rgba(52, 31, 14, 0.847);
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
  margin-top: 10px;
  border-radius: 30px;
`;

const SidePanel = ({ isSidePanelOpen }) => {
  return (
    <LayoutContainer>
      <SidePanelContainer isSidePanelOpen={isSidePanelOpen}>
        <Icon>
          <Link to = "/dashboard">
          <FontAwesomeIcon icon={faHome} />
          </Link>
        </Icon>
        <Icon>
          <Link to="/leave">
            <FontAwesomeIcon icon={faUser} />
          </Link>
        </Icon>
        <Icon>
          <FontAwesomeIcon icon={faCog} />
        </Icon>
        <Icon>
          <FontAwesomeIcon icon={faSignOutAlt} />
        </Icon>
      </SidePanelContainer>
      <ContentContainer>
        <ContentText>
          <CardHeading>WHAT WE DO</CardHeading>
          <br />
          <CardContainer>
            <Card>
              <CardTitle>EMPLOYEE DATABASE</CardTitle>
              <CardImage src={db} alt="Employee Database" />
              <CardContent>
                Maintain a centralized database of all employees, including their personal information, contact details, and employment history.
              </CardContent>
            </Card>
            <Card>
              <CardTitle>PERFORMANCE EVALUATION</CardTitle>
              <CardImage src={c2} alt="Evaluation" />
              <CardContent>
                Conduct performance reviews, set goals, and track achievements to enhance employee development and optimize team productivity.
              </CardContent>
            </Card>
            <Card>
              <CardTitle>LEAVE MANAGEMENT</CardTitle>
              <CardImage src={c3} alt="Evaluation" />
              <CardContent>
                Streamline the process of requesting, approving, and managing employee leaves, ensuring smooth workflow and adequate workforce planning.
              </CardContent>
            </Card>
          </CardContainer>
        </ContentText>
      </ContentContainer>
    </LayoutContainer>
  );
};

export default SidePanel;
