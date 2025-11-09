import styled from "styled-components";

const Timeline = styled.div`
  position: relative;
  padding-left: 2rem;
  display: grid;
  gap: 2rem;

  &::before {
    content: "";
    position: absolute;
    left: 16px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(180deg, rgba(168, 85, 247, 0.4), rgba(34, 211, 238, 0.1));
  }

  @media (min-width: 1024px) {
    padding-left: 3rem;
  }
`;

const TimelineItem = styled.div`
  position: relative;
  padding-left: 2rem;

  &::before {
    content: "";
    position: absolute;
    left: -6px;
    top: 20px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: var(--gradient-accent);
    box-shadow: 0 0 18px rgba(168, 85, 247, 0.5);
  }
`;

const TimelineContent = styled.div`
  background: rgba(3, 6, 23, 0.75);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 1.8rem;
  box-shadow: var(--shadow);
`;

const Meta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  font-size: 0.9rem;
  color: var(--text-secondary);
  letter-spacing: 0.05em;
  text-transform: uppercase;
  span {
    color: var(--text-secondary);
  }
`;

const Date = styled.span`
  color: var(--accent-light);
`;

const Company = styled.h3`
  margin: 0.8rem 0 0.2rem;
  color: var(--white);
  font-size: 1.4rem;
`;

const Role = styled.p`
  color: var(--text-secondary);
  margin-bottom: 1rem;
  font-weight: 600;
  letter-spacing: 0.03em;
`;

const Description = styled.ul`
  color: var(--text-light);
  font-size: 0.95rem;
  line-height: 1.7;
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 0.6rem;

  li {
    position: relative;
    padding-left: 1.4rem;

    &::before {
      content: "▹";
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
            <Meta>
              <Date>{item.date}</Date>
              <span>{item.location}</span>
            </Meta>
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
