import styled from "styled-components";

const Timeline = styled.div`
  max-width: 800px;
  margin: 0 auto;
  position: relative;

  &::before {
    content: "";
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
    content: "";
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
      content: "•";
      position: absolute;
      left: 0;
      color: var(--accent);
    }
  }
`;

const experience = [
  {
    id: 1,
    company: "Lloyds Banking Group",
    role: "Software Engineer",
    date: "09/2022 - 01/2025",
    location: "Halifax, United Kingdom",
    description: [
      "Developed responsive and user-friendly interfaces using React, Redux, and TypeScript for financial applications used by brokers across the UK",
      "Implemented complex form validation and state management using Formik and Redux, ensuring data integrity and a smooth user experience",
      "Translated UI designs into functional components, collaborating closely with designers to bridge the gap between design and implementation",
      "Established comprehensive testing strategies with Jest and React Testing Library for unit tests, and Selenium/Playwright for integration testing",
    ],
  },
  {
    id: 2,
    company: "AND DIGITAL",
    role: "Associate Product Developer",
    date: "03/2022 - 01/2025",
    location: "Halifax, United Kingdom",
    description: [
      "Developed the Health Check feature, enabling club executives to view health metrics for client engagements",
      "Participated in Agile ceremonies and regularly demonstrated completed work to stakeholders",
      "Proactively expanded technical capabilities by taking on challenging work outside my comfort zone",
      "Conducted user research and created tailored documentation for presentation to stakeholders",
    ],
  },
  {
    id: 3,
    company: "Luminus Technical University College",
    role: "Junior Software Developer",
    date: "05/2020 - 11/2020",
    location: "Amman, Jordan",
    description: [
      "Integrated Zoom APIs with the university's Content Management System",
      "Developed frontend components for data visualization",
      "Mentored students as a teaching assistant, helping them understand web development fundamentals",
    ],
  },
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
