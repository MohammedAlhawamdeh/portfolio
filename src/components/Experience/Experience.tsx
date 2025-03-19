import styled from 'styled-components';

const Timeline = styled.div`
  max-width: 800px;
  margin: 0 auto;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background-color: var(--accent);
    opacity: 0.3;

    @media (max-width: 768px) {
      left: 20px;
    }
  }
`;

const TimelineItem = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 30px;
  margin-bottom: 3rem;
  width: 50%;
  position: relative;

  &:nth-child(odd) {
    align-self: flex-end;
    justify-content: flex-start;
    padding-left: 30px;
    padding-right: 0;
    margin-left: auto;
  }

  &::before {
    content: '';
    position: absolute;
    right: -8px;
    top: 20px;
    width: 16px;
    height: 16px;
    background-color: var(--accent);
    border-radius: 50%;
  }

  &:nth-child(odd)::before {
    right: auto;
    left: -8px;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding-left: 45px;
    padding-right: 0;
    justify-content: flex-start;

    &:nth-child(odd) {
      align-self: flex-start;
      margin-left: 0;
    }

    &::before {
      left: 16px;
      right: auto;
    }

    &:nth-child(odd)::before {
      left: 16px;
    }
  }
`;

const TimelineContent = styled.div`
  background-color: rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: var(--shadow);
  max-width: 400px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const Date = styled.span`
  color: var(--accent);
  font-size: 0.9rem;
  font-weight: 500;
`;

const Company = styled.h3`
  margin: 0.5rem 0;
  color: var(--white);
  font-size: 1.2rem;
`;

const Role = styled.p`
  color: var(--text-light);
  margin-bottom: 0.5rem;
  font-weight: 500;
  opacity: 0.9;
`;

const Description = styled.ul`
  color: var(--text-light);
  font-size: 0.95rem;
  line-height: 1.6;
  list-style: none;
  padding: 0;
  margin: 0;
  opacity: 0.8;

  li {
    margin-bottom: 0.5rem;
    padding-left: 1.2rem;
    position: relative;

    &::before {
      content: '•';
      position: absolute;
      left: 0;
      color: var(--accent);
    }
  }
`;

const experience = [
  {
    id: 1,
    company: "Taze",
    role: "Frontend Developer",
    date: "May 2023 - Present",
    description: [
      "Leading frontend development with React, TypeScript, and modern web technologies",
      "Implemented complex form validation and state management using React Final Form and Redux",
      "Developed and maintained reusable component libraries and design systems",
      "Collaborated with cross-functional teams to deliver high-quality solutions"
    ]
  },
  {
    id: 2,
    company: "Kaizen Softworks",
    role: "Frontend Developer",
    date: "Nov 2021 - May 2023",
    description: [
      "Built responsive web applications using React and modern JavaScript features",
      "Implemented test-driven development practices using Jest and React Testing Library",
      "Utilized Azure DevOps for CI/CD pipeline management and agile development",
      "Integrated Adobe Analytics for tracking and improving user engagement"
    ]
  },
  {
    id: 3,
    company: "ASAC",
    role: "Teaching Assistant",
    date: "Jan 2021 - Oct 2021",
    description: [
      "Assisted students in learning full-stack JavaScript development",
      "Conducted code reviews and provided technical mentorship",
      "Created and maintained educational materials and coding exercises",
      "Facilitated pair programming sessions and technical workshops"
    ]
  }
];

const Experience = () => {
  return (
    <Timeline>
      {experience.map((item) => (
        <TimelineItem key={item.id}>
          <TimelineContent>
            <Date>{item.date}</Date>
            <Company>{item.company}</Company>
            <Role>{item.role}</Role>
            <Description>
              {item.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </Description>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default Experience;