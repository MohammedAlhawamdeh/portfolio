import styled from "styled-components";
import { motion } from "framer-motion";

const HeroSection = styled.section`
  min-height: calc(100vh - 70px);
  display: flex;
  align-items: center;
  padding: 2rem 0;
  background: var(--hero-gradient);
  position: relative;
  color: var(--text-light);

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255, 255, 255, 0.3) 50%,
      transparent 100%
    );
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled(motion.h1)`
  font-size: 4rem;
  margin-bottom: 1.5rem;
  color: var(--text-light);
  line-height: 1.2;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled(motion.h2)`
  font-size: 1.8rem;
  color: var(--accent);
  margin-bottom: 2rem;
  font-weight: 500;
  opacity: 0.9;
`;

const Description = styled(motion.p)`
  font-size: 1.2rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
`;

const Button = styled.a`
  padding: 1rem 2.5rem;
  border-radius: 5px;
  font-size: 1.1rem;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &.primary {
    background-color: var(--accent);
    color: var(--white);
    border: 2px solid var(--accent);

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 6px 12px rgba(255, 110, 64, 0.3);
    }
  }

  &.secondary {
    border: 2px solid var(--text-light);
    color: var(--text-light);
    background-color: transparent;

    &:hover {
      background-color: var(--text-light);
      color: var(--background-dark);
      transform: translateY(-3px);
    }
  }
`;

const Hero = () => {
  return (
    <HeroSection id="home">
      <Container>
        <Content>
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Mohammed Alhawamdeh
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Full Stack Developer
          </Subtitle>
          <Description
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I build responsive and user-friendly web applications with modern
            technologies. Passionate about creating seamless user experiences
            and solving complex problems.
          </Description>
          <ButtonGroup
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button href="#contact" className="primary">
              Contact Me
            </Button>
            <Button
              href="/resume.pdf"
              className="secondary"
              download="Mohammed_Alhawamdeh_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </Button>
          </ButtonGroup>
        </Content>
      </Container>
    </HeroSection>
  );
};

export default Hero;
