import { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionTitle } from '../../styles/SharedStyles';
import Education from '../Education/Education';
import Experience from '../Experience/Experience';

const Section = styled.section`
  padding: var(--section-spacing) 0;
  background: linear-gradient(180deg, rgba(3, 6, 23, 0.95) 0%, rgba(5, 10, 31, 1) 100%);
  color: var(--text-light);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const TabsContainer = styled.div`
  display: inline-flex;
  justify-content: center;
  background: rgba(255, 255, 255, 0.04);
  border-radius: 999px;
  padding: 0.4rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  margin: 0 auto 3rem;
  gap: 0.4rem;
`;

const TabButton = styled.button<{ active: boolean }>`
  padding: 0.9rem 2.4rem;
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ active }) => (active ? 'var(--white)' : 'var(--text-secondary)')};
  background: ${({ active }) => (active ? 'var(--gradient-accent)' : 'transparent')};
  border-radius: 999px;
  transition: all 0.3s ease;
  border: none;

  &:hover {
    color: var(--white);
    opacity: 0.9;
  }
`;

const ContentContainer = styled(motion.div)`
  position: relative;
  min-height: 420px;
  border-radius: 32px;
  padding: clamp(2rem, 4vw, 3rem);
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(2, 6, 23, 0.7);
  box-shadow: var(--shadow);
  backdrop-filter: blur(10px);
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
        <SectionTitle as={motion.h2} {...fadeIn}>
          Background
        </SectionTitle>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
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
        </div>

        <ContentContainer>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={fadeIn}
            >
              {activeTab === 'experience' ? <Experience /> : <Education />}
            </motion.div>
          </AnimatePresence>
        </ContentContainer>
      </Container>
    </Section>
  );
};

export default Background;
