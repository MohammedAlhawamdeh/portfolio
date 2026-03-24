import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { SectionTitle } from '../../styles/SharedStyles';

const Section = styled.section`
  padding: var(--section-spacing) 0;
  background: linear-gradient(180deg, rgba(5, 8, 25, 1) 0%, rgba(3, 6, 23, 0.6) 100%);
  color: var(--text-light);
`;

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
`;

const ContactPanel = styled(motion.div)`
  margin-top: 3rem;
  border-radius: 32px;
  padding: clamp(2rem, 4vw, 3rem);
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(3, 6, 23, 0.8);
  box-shadow: var(--shadow);
  backdrop-filter: blur(12px);
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

const ContactDescription = styled.p`
  color: var(--text-secondary);
  font-size: 1.1rem;
  line-height: 1.8;
  margin: 0 auto;
  max-width: 540px;
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
`;

const InfoCard = styled.div`
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.02);
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  align-items: flex-start;
  text-align: left;
`;

const IconWrapper = styled.div`
  width: 46px;
  height: 46px;
  border-radius: 14px;
  background: rgba(168, 85, 247, 0.12);
  color: var(--accent);
  display: grid;
  place-items: center;
  font-size: 1.3rem;
`;

const Label = styled.span`
  font-size: 0.8rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--text-secondary);
`;

const Value = styled.a`
  font-size: 1.05rem;
  color: var(--white);
  text-decoration: none;
  word-break: break-word;
  transition: color 0.3s ease;

  &:hover {
    color: var(--accent);
  }
`;

const StaticValue = styled.span`
  font-size: 1.05rem;
  color: var(--white);
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;

  a {
    width: 56px;
    height: 56px;
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.08);
    display: grid;
    place-items: center;
    color: var(--white);
    font-size: 1.4rem;
    transition: transform 0.3s ease, border-color 0.3s ease;

    &:hover {
      transform: translateY(-4px);
      border-color: var(--accent);
      color: var(--accent);
    }
  }
`;

const Contact = () => {
  return (
    <Section id="contact">
      <Container>
        <SectionTitle>Get In Touch</SectionTitle>
        <ContactPanel
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <ContactDescription>
            Booking a new build, code audit, or lightning consultation? Drop me a line — I respond within 24h and love partnering with ambitious teams.
          </ContactDescription>
          <InfoGrid>
            <InfoCard>
              <IconWrapper>
                <FaEnvelope />
              </IconWrapper>
              <Label>Email</Label>
              <Value href="mailto:mohawamdehtech@gmail.com">mohawamdehtech@gmail.com</Value>
            </InfoCard>
            <InfoCard>
              <IconWrapper>
                <FaPhone />
              </IconWrapper>
              <Label>Phone</Label>
              <Value href="tel:+905343359042">+90 534 335 9042</Value>
            </InfoCard>
            <InfoCard>
              <IconWrapper>
                <FaMapMarkerAlt />
              </IconWrapper>
              <Label>Location</Label>
              <StaticValue>United Kingdom</StaticValue>
            </InfoCard>
          </InfoGrid>
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
        </ContactPanel>
      </Container>
    </Section>
  );
};

export default Contact;
