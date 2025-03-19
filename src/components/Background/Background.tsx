import { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionTitle } from '../../styles/SharedStyles';
import Education from '../Education/Education';
import Experience from '../Experience/Experience';

const Section = styled.section`
  padding: 6rem 0;
  background-color: var(--background-dark);
  color: var(--text-light);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 4rem;
  gap: 1rem;
`;

const TabButton = styled.button<{ active: boolean }>`
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  font-weight: 500;
  color: ${props => props.active ? 'var(--white)' : 'var(--white)'};
  background-color: ${props => props.active ? 'var(--accent)' : 'transparent'};
  border: 2px solid var(--accent);
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${props => props.active ? 'var(--accent)' : 'rgba(255, 110, 64, 0.1)'};
  }
`;

const ContentContainer = styled(motion.div)`
  position: relative;
  min-height: 400px;

  .education-content,
  .experience-content {
    background-color: var(--background-dark);
    color: var(--white);
  }
`;

const tabs = [
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' }
];

const Background = () => {
  const [activeTab, setActiveTab] = useState('experience');

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.5 }
  };

  return (
    <Section id="background">
      <Container>
        <SectionTitle 
          as={motion.h2} 
          {...fadeIn}
          style={{ color: 'var(--white)' }}
        >
          Background
        </SectionTitle>
        
        <TabsContainer>
          {tabs.map(tab => (
            <TabButton
              key={tab.id}
              active={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </TabButton>
          ))}
        </TabsContainer>

        <ContentContainer>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={fadeIn}
            >
              {activeTab === 'experience' ? (
                <div className="experience-content">
                  <Experience />
                </div>
              ) : (
                <div className="education-content">
                  <Education />
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </ContentContainer>
      </Container>
    </Section>
  );
};

export default Background;