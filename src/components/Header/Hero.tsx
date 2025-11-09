import styled from "styled-components";
import { motion } from "framer-motion";

const HeroSection = styled.section`
  min-height: 80vh;
  display: flex;
  align-items: center;
  padding: clamp(3rem, 7vw, 6rem) 0;
  background: var(--hero-gradient);
  position: relative;
  overflow: hidden;
  color: var(--white);

  &::before {
    content: "";
    position: absolute;
    inset: 10%;
    border: 1px solid rgba(255, 255, 255, 0.04);
    border-radius: 36px;
  }

  &::after {
    content: "";
    position: absolute;
    width: 420px;
    height: 420px;
    background: radial-gradient(
      circle,
      rgba(168, 85, 247, 0.4),
      transparent 60%
    );
    top: -140px;
    right: -100px;
    filter: blur(25px);
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  width: 100%;
  position: relative;
  z-index: 1;
`;

const Layout = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: clamp(2rem, 4vw, 4rem);
  align-items: center;
`;

const InfoBlock = styled.div`
  display: grid;
  gap: 1.4rem;
`;

const BadgeRow = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

const Badge = styled.span`
  padding: 0.35rem 1rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  letter-spacing: 0.15em;
  font-size: 0.75rem;
  text-transform: uppercase;
  color: var(--text-secondary);
  background: rgba(255, 255, 255, 0.08);
`;

const Title = styled(motion.h1)`
  font-size: clamp(2.4rem, 5vw, 4.2rem);
  line-height: 1.1;
  margin: 0;
`;

const Description = styled(motion.p)`
  margin: 0;
  max-width: 520px;
  color: var(--text-secondary);
  font-size: 1.05rem;
  line-height: 1.7;
`;

const CTAGroup = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const PrimaryButton = styled.a`
  padding: 0.9rem 2.2rem;
  border-radius: 18px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  background: var(--gradient-accent);
  color: var(--white);
  box-shadow: 0 20px 35px rgba(99, 102, 241, 0.35);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-3px);
  }
`;

const SecondaryButton = styled.a`
  padding: 0.9rem 2.2rem;
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--white);
  transition: background 0.3s ease, transform 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    transform: translateY(-3px);
  }
`;

const SnapshotCard = styled(motion.div)`
  border-radius: 26px;
  padding: 2.2rem;
  background: rgba(3, 6, 23, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: var(--shadow);
  display: grid;
  gap: 1.4rem;
`;

const SnapshotHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 1rem;
`;

const SnapshotTag = styled.span`
  font-size: 0.8rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--text-secondary);
`;

const SnapshotTitle = styled.h3`
  margin: 0.3rem 0 0;
  font-size: 1.7rem;
`;

const SnapshotDescription = styled.p`
  margin: 0;
  color: var(--text-secondary);
  line-height: 1.6;
`;

const SnapshotStats = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1rem;
`;

const Stat = styled.div`
  padding: 1rem 1.2rem;
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.03);

  h4 {
    margin: 0;
    font-size: 1.2rem;
  }

  p {
    margin: 0.3rem 0 0;
    color: var(--text-secondary);
    font-size: 0.85rem;
  }
`;

const SnapshotList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 0.8rem;
  color: var(--text-secondary);

  li {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    font-size: 0.95rem;
  }

  span {
    color: var(--accent-secondary);
  }
`;

const Hero = () => {
  return (
    <HeroSection id="home">
      <Container>
        <Layout>
          <InfoBlock>
            <BadgeRow
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Badge>Front-end engineer</Badge>
              <Badge>Back-end engineer</Badge>
            </BadgeRow>
            <Title
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Full-stack engineer delivering fast web apps.
            </Title>
            <Description
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              3+ years translating user research into production-grade fintech,
              ecommerce, and AI interfaces. I plug into teams quickly, keep
              design/dev in sync, and ship measurable improvements.
            </Description>
            <CTAGroup
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <PrimaryButton href="#contact">Start a project</PrimaryButton>
              <SecondaryButton
                href="/Mohammed_Alhawamdeh_Resume%20.pdf"
                download="Mohammed_Alhawamdeh_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download resume
              </SecondaryButton>
            </CTAGroup>
          </InfoBlock>
          <SnapshotCard
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <div>
              <SnapshotHeader>
                <div>
                  <SnapshotTag>Snapshot</SnapshotTag>
                  <SnapshotTitle>Full-stack engineer</SnapshotTitle>
                </div>
                <strong>3+ yrs</strong>
              </SnapshotHeader>
              <SnapshotDescription>
                Lead builds across regulated finance, growth-stage SaaS, and AI
                copilots with a focus on reliability, accessibility, and fast
                feedback loops.
              </SnapshotDescription>
            </div>
            <SnapshotStats>
              <Stat>
                <h4>20+</h4>
                <p>Products shipped</p>
              </Stat>
              <Stat>
                <h4>5</h4>
                <p>Cross-functional teams</p>
              </Stat>
              <Stat>
                <h4>0→1</h4>
                <p>Full launches delivered</p>
              </Stat>
            </SnapshotStats>
            <SnapshotList>
              <li>
                <span>▹</span> Fintech journeys, onboarding, and secure forms
              </li>
              <li>
                <span>▹</span> Frontend systems with TypeScript, React, Tailwind
              </li>
              <li>
                <span>▹</span> Node/Express services, automation, CI pipelines
              </li>
            </SnapshotList>
          </SnapshotCard>
        </Layout>
      </Container>
    </HeroSection>
  );
};

export default Hero;
