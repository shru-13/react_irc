
import styled from 'styled-components';

const AboutUsContainer = styled.div`
  max-width: 800px;
  margin:auto;
  padding: 20px;
  font-family: 'Arial', sans-serif;
`;

const Section = styled.section`
  margin-bottom: 20px;
`;

const SectionTitle = styled.h2`
  color: #512b18;
`;

const Paragraph = styled.p`
  line-height: 1.5;
`;

const SectionHeading = styled.div`
background-color: rgba(32, 19, 7, 0.847);
padding: 20px;
color: rgba(247, 220, 195, 0.847);
font-weight: bold;
text-align: center;
`;

const AboutUs = () => {
  return (
    <AboutUsContainer>
        <Section>
          <br /><br />
            <SectionHeading>
                ABOUT US
            </SectionHeading>
        </Section>
      <Section>
        <br /><br />
        <SectionTitle>Welcome to Our Employee Management System</SectionTitle>
        <Paragraph>
          We are dedicated to providing a comprehensive Employee Management System that streamlines HR processes,
          enhances employee experience, and ensures efficient workforce management.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>Our Mission</SectionTitle>
        <Paragraph>
          Our mission is to empower organizations by offering a user-friendly and feature-rich Employee Management
          System, promoting better HR practices and fostering a positive work environment.
          <br />
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>Key Features</SectionTitle>
        <br />
        <Paragraph>
          - Centralized Employee Database
          <br /><br />
          - Performance Evaluation and Goal Tracking
          <br /><br />
          - Leave Management System
          <br /><br />
          - User-friendly Interface
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>Contact Us</SectionTitle>
        <Paragraph>
          <br />
          For inquiries and support, please email us at <strong>sync@employeemanagementsystem.com</strong>.
        </Paragraph>
      </Section>
      <br /><br /><br /><br />
      <br /><br /><br /><br />
      <br /><br /><br /><br />
      <br /><br /><br /><br />
      <br /><br /><br /><br />
      <br /><br /><br /><br />
      <br /><br /><br /><br />
      <br /><br /><br />
    </AboutUsContainer>
  );
};

export default AboutUs;
