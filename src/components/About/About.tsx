import styled from 'styled-components';
import { motion } from 'framer-motion';
import * as FaIcons from 'react-icons/fa';
import { SectionTitle } from '../../styles/SharedStyles';

const Section = styled.section`
  padding: 6rem 0;
  background-color: var(--background);
  position: relative;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const Content = styled.div`
  display: flex;
  gap: 4rem;
  align-items: center;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    text-align: center;
  }
`;

const TextBlock = styled(motion.div)`
  flex: 1;
`;

const Text = styled(motion.p)`
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-secondary);
`;

const ImageBlock = styled(motion.div)`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  
  img {
    width: 100%;
    max-width: 400px;
    border-radius: 10px;
    z-index: 1;
    object-fit: cover;
  }

  &::before {
    content: '';
    position: absolute;
    top: 20px;
    right: 20px;
    width: 100%;
    height: 100%;
    max-width: 400px;
    background-color: var(--accent);
    border-radius: 10px;
    z-index: 0;
  }

  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`;

const SkillsSection = styled(motion.div)`
  margin-top: 4rem;
`;

const SkillsTitle = styled(motion.h3)`
  text-align: center;
  margin-bottom: 2rem;
  color: var(--text-primary);
  font-size: 2rem;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const SkillCard = styled(motion.div)`
  background-color: var(--white);
  padding: 2rem;
  border-radius: 10px;
  box-shadow: var(--shadow);
  transition: transform 0.3s ease;
  text-align: center;

  &:hover {
    transform: translateY(-5px);
  }

  .icon {
    font-size: 2.5rem;
    color: var(--accent);
    margin-bottom: 1rem;
  }

  h3 {
    color: var(--text-primary);
    margin-bottom: 1rem;
    font-size: 1.3rem;
  }

  p {
    color: var(--text-secondary);
    font-size: 0.95rem;
    line-height: 1.6;
  }
`;

const skillsData = [
  {
    id: '1',
    icon: <FaIcons.FaCode />,
    title: 'Frontend Technologies',
    desc: 'React, React Hooks, React Final Forms, Redux, TypeScript, JavaScript, HTML, CSS, Formik, React Testing Library'
  },
  {
    id: '2',
    icon: <FaIcons.FaServer />,
    title: 'Backend Technologies',
    desc: 'Node.js, Express, MongoDB, RESTful API, Backend Development'
  },
  {
    id: '3',
    icon: <FaIcons.FaCheck />,
    title: 'Testing & Quality',
    desc: 'Jest, Playwright, Selenium, Cucumber, Integration Testing, Unit Testing, Test Driven Development'
  },
  {
    id: '4',
    icon: <FaIcons.FaTools />,
    title: 'Development Tools',
    desc: 'Git/Github, Azure DevOps, CI/CD, Agile/Scrum, Adobe Analytics, Debugging'
  }
];

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

const About = () => {
  return (
    <Section id="about">
      <Container>
        <SectionTitle 
          as={motion.h2}
          {...fadeIn}
        >
          About Me
        </SectionTitle>
        <Content>
          <TextBlock {...fadeIn}>
            <Text>Frontend Development Engineer with 3+ years of experience building responsive web applications using JavaScript/TypeScript, React, and modern frontend frameworks. Proven track record of translating UI/UX designs into intuitive user interfaces.</Text>
            <Text>Experienced in Agile methodologies with a strong focus on code quality, testing, and cross-functional collaboration. Skilled in developing financial applications and implementing complex form validation and state management solutions.</Text>
            <Text>Currently based in Turkey, I'm passionate about creating efficient and user-friendly web experiences that solve real business problems.</Text>
          </TextBlock>
          <ImageBlock {...fadeIn}>
            <img src="/profile_picture.jpg" alt="Profile" />
          </ImageBlock>
        </Content>
        <SkillsSection {...fadeIn}>
          <SkillsTitle>Technical Skills</SkillsTitle>
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
