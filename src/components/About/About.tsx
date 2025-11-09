import styled from "styled-components";
import { motion } from "framer-motion";
import * as FaIcons from "react-icons/fa";
import { SectionTitle } from "../../styles/SharedStyles";

const Section = styled.section`
  padding: var(--section-spacing) 0;
  background: radial-gradient(circle at top, rgba(99, 102, 241, 0.15), transparent 55%);
  position: relative;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: clamp(2rem, 4vw, 4rem);
  margin-bottom: 4rem;
`;

const TextBlock = styled(motion.div)`
  padding: 2.5rem;
  border-radius: 32px;
  background: rgba(3, 6, 23, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: var(--shadow);
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    inset: 1px;
    border-radius: 30px;
    border: 1px solid rgba(99, 102, 241, 0.25);
    opacity: 0.4;
  }
`;

const Text = styled(motion.p)`
  margin-bottom: 1.2rem;
  font-size: 1.05rem;
  line-height: 1.9;
  color: var(--text-secondary);
`;

const HighlightList = styled.ul`
  margin-top: 1.5rem;
  display: grid;
  gap: 0.75rem;

  li {
    display: flex;
    gap: 0.6rem;
    align-items: flex-start;
    color: var(--text-primary);
    font-size: 0.95rem;

    span {
      color: var(--accent-light);
    }
  }
`;

const ImageBlock = styled(motion.div)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PortraitFrame = styled.div`
  border-radius: 28px;
  padding: 0.6rem;
  background: linear-gradient(160deg, rgba(168, 85, 247, 0.5), rgba(14, 165, 233, 0.2));
  max-width: 420px;
  width: 100%;
  box-shadow: var(--shadow);

  img {
    border-radius: 22px;
    width: 100%;
    display: block;
  }
`;

const FloatingBadge = styled.div`
  position: absolute;
  bottom: 8%;
  left: -5%;
  padding: 1.1rem 1.4rem;
  border-radius: 18px;
  background: rgba(3, 6, 23, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--text-secondary);
  font-size: 0.9rem;
  max-width: 210px;
  box-shadow: 0 15px 35px rgba(2, 6, 23, 0.7);

  strong {
    color: var(--white);
    display: block;
    font-size: 1.1rem;
  }
`;

const StatsRow = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  margin-top: 1.5rem;

  div {
    min-width: 120px;
    padding: 0.9rem 1.1rem;
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.08);

    h4 {
      font-size: 1.4rem;
      color: var(--white);
      margin-bottom: 0.1rem;
    }

    p {
      margin: 0;
      color: var(--text-secondary);
      font-size: 0.85rem;
    }
  }
`;

const SkillsSection = styled(motion.div)`
  margin-top: 4rem;
`;

const SkillsTitle = styled(motion.h3)`
  text-align: center;
  margin-bottom: 2rem;
  color: var(--white);
  font-size: 2rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
`;

const SkillCard = styled(motion.div)`
  padding: 2rem;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(4, 8, 20, 0.6);
  box-shadow: var(--shadow);
  transition: transform 0.3s ease, border-color 0.3s ease;
  text-align: left;

  &:hover {
    transform: translateY(-6px);
    border-color: rgba(168, 85, 247, 0.6);
  }

  .icon {
    width: 52px;
    height: 52px;
    border-radius: 14px;
    background: rgba(99, 102, 241, 0.15);
    display: grid;
    place-items: center;
    color: var(--accent);
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }

  h3 {
    color: var(--white);
    margin-bottom: 0.8rem;
    font-size: 1.2rem;
  }

  p {
    color: var(--text-secondary);
    font-size: 0.95rem;
    line-height: 1.6;
  }
`;

const skillsData = [
  {
    id: "1",
    icon: <FaIcons.FaCode />,
    title: "Frontend Systems",
    desc: "React, Remix, TypeScript, Redux, Styled Components, Tailwind, Component Design Systems, Accessibility",
  },
  {
    id: "2",
    icon: <FaIcons.FaServer />,
    title: "Backend & APIs",
    desc: "Node.js, Express, MongoDB, REST, GraphQL, API Gateways, Performance-first integrations",
  },
  {
    id: "3",
    icon: <FaIcons.FaCheck />,
    title: "Quality & Testing",
    desc: "Jest, Playwright, Selenium, Cucumber, Contract Testing, CI pipelines, release governance",
  },
  {
    id: "4",
    icon: <FaIcons.FaTools />,
    title: "Product Enablement",
    desc: "Git/GitHub, Azure DevOps, CI/CD, Agile leadership, Adobe Analytics, stakeholder storytelling",
  },
];

const highlights = [
  { id: "h1", label: "Fintech scale", value: "serving millions of UK customers daily" },
  { id: "h2", label: "Design bridges", value: "tight collaboration with UX/UI squads" },
  { id: "h3", label: "Quality-first", value: "baked-in testing strategy across SDLC" },
];

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const About = () => {
  return (
    <Section id="about">
      <Container>
        <SectionTitle as={motion.h2} {...fadeIn}>
          About Me
        </SectionTitle>
        <Content>
          <TextBlock {...fadeIn}>
            <Text>
              Full-stack development engineer with 3+ years architecting responsive products across
              financial services, SaaS, and education. I translate complex requirements into interfaces
              that feel effortless to use.
            </Text>
            <Text>
              From system design to production-ready delivery, I obsess over accessible experiences,
              maintainable code, and measurable outcomes. Every project begins with empathy for the user
              and ends with instrumentation that proves the impact.
            </Text>
            <Text>
              Based in Turkey, partnering with distributed teams worldwide to launch bold web experiences
              backed by robust engineering practices.
            </Text>
            <StatsRow>
              <div>
                <h4>3+</h4>
                <p>Years building in fintech</p>
              </div>
              <div>
                <h4>50+</h4>
                <p>UX flows shipped</p>
              </div>
              <div>
                <h4>∞</h4>
                <p>Curiosity & learning</p>
              </div>
            </StatsRow>
            <HighlightList>
              {highlights.map(({ id, label, value }) => (
                <li key={id}>
                  <span>▹</span> {label}: {value}
                </li>
              ))}
            </HighlightList>
          </TextBlock>
          <ImageBlock {...fadeIn}>
            <PortraitFrame>
              <img src="/profile_picture.jpg" alt="Profile" />
            </PortraitFrame>
            <FloatingBadge>
              <strong>Multi-disciplinary</strong>
              Engineering, DX research, and mentoring across squads.
            </FloatingBadge>
          </ImageBlock>
        </Content>
        <SkillsSection {...fadeIn}>
          <SkillsTitle>Technical Playground</SkillsTitle>
          <SkillsGrid>
            {skillsData.map(({ id, icon, title, desc }) => (
              <SkillCard
                key={id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="icon">{icon}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </SkillCard>
            ))}
          </SkillsGrid>
        </SkillsSection>
      </Container>
    </Section>
  );
};

export default About;
