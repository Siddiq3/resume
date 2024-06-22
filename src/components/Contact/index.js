import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaGlobe } from 'react-icons/fa';

const backgroundAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(270deg, #1e1e1e, #292929, #1e1e1e);
  background-size: 600% 600%;
  animation: ${backgroundAnimation} 10s ease infinite;
  padding: 40px;
  border-radius: 8px;
  max-width: 800px;
  margin: 0 auto;
  @media (max-width: 960px) {
    padding: 20px;
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-bottom: 20px;
  color: #fff;
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const Subtitle = styled.div`
  font-size: 24px;
  text-align: center;
  font-weight: 400;
  color: #bbb;
  margin-bottom: 40px;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: #1a1a40;
  padding: 15px;
  border-radius: 8px;
  color: #fff;
  font-size: 18px;
`;

const InfoLink = styled.a`
  color: #4b9ce2;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Contact = () => {
  return (
    <Container>
      <Title>Contact</Title>
      <ContactInfo>
        <InfoItem>
          <FaPhone /> +91-9705116606
        </InfoItem>
        <InfoItem>
          <FaEnvelope /> 
          <InfoLink href="mailto:siddiqkolimi@gmail.com">siddiq.kolimi@gmail.com</InfoLink>
        </InfoItem>
        <InfoItem>
          <FaLinkedin />
          <InfoLink href="https://www.linkedin.com/in/siddiq-kolimi-a371a9192" target="_blank">
            linkedin.com/in/siddiq-kolimi-a371a9192/
          </InfoLink>
        </InfoItem>
        <InfoItem>
          <FaGithub />
          <InfoLink href="https://github.com/Siddiq3" target="_blank">
            github.com/Siddiq3/
          </InfoLink>
        </InfoItem>
        <InfoItem>
          <FaGlobe />
          <InfoLink href="https://siddiqkolimi.vercel.app" target="_blank">
            siddiqkolimi.com
          </InfoLink>
        </InfoItem>
      </ContactInfo>
    </Container>
  );
};

export default Contact;
