import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { SectionTitle } from '../../styles/SharedStyles';

const Section = styled.section`
  padding: 6rem 0;
  background-color: var(--background-dark);
  color: var(--text-light);
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
`;

const ContactWrapper = styled(motion.div)`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
`;

const ContactDescription = styled.p`
  color: var(--text-light);
  font-size: 1.2rem;
  line-height: 1.8;
  opacity: 0.9;
  max-width: 600px;
`;

const InfoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    background-color: rgba(255, 255, 255, 0.1);
  }

  svg {
    color: var(--accent);
    font-size: 2rem;
  }

  a, span {
    color: var(--text-light);
    text-decoration: none;
    transition: color 0.3s ease;
  }

  a:hover {
    color: var(--accent);
  }

  &.email-item {
    a {
      font-size: 1rem;
    }
  }

  &.phone-item {
    a {
      font-size: 0.85rem;
      letter-spacing: -0.5px;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 2rem;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.05);
    color: var(--text-light);
    font-size: 1.75rem;
    transition: all 0.3s ease;

    &:hover {
      background-color: var(--accent);
      color: var(--white);
      transform: translateY(-5px);
    }
  }
`;

const Contact = () => {
  return (
    <Section id="contact">
      <Container>
        <SectionTitle style={{ color: 'var(--white)' }}>
          Get In Touch
        </SectionTitle>

        <ContactWrapper>
          <ContactDescription>
            I'm always interested in hearing about new projects and opportunities. 
            Feel free to reach out if you'd like to connect or discuss potential collaboration.
          </ContactDescription>

          <InfoContainer>
            <InfoItem className="email-item">
              <FaEnvelope />
              <a href="mailto:mohawamdehtech@gmail.com">mohawamdehtech@gmail.com</a>
            </InfoItem>
            
            <InfoItem className="phone-item">
              <FaPhone />
              <a href="tel:+905343359042">+90 534 335 9042</a>
            </InfoItem>
            
            <InfoItem>
              <FaMapMarkerAlt />
              <span>Turkey</span>
            </InfoItem>
          </InfoContainer>

          <SocialLinks>
            <a 
              href="https://github.com/MohammedAlhawamdeh" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <FaGithub />
            </a>
            <a 
              href="https://www.linkedin.com/in/mohammed-alhawamdeh/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin />
            </a>
          </SocialLinks>
        </ContactWrapper>
      </Container>
    </Section>
  );
};

export default Contact;