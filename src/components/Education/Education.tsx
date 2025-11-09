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
    background: linear-gradient(180deg, rgba(34, 211, 238, 0.5), rgba(99, 102, 241, 0.1));
  }
`;

const TimelineItem = styled.div`
  position: relative;
  padding-left: 2rem;

  &::before {
    content: "";
    position: absolute;
    left: -6px;
    top: 18px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: rgba(34, 211, 238, 1);
    box-shadow: 0 0 18px rgba(34, 211, 238, 0.6);
  }
`;

const TimelineContent = styled.div`
  background: rgba(4, 8, 20, 0.7);
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 1.8rem;
  box-shadow: var(--shadow);
`;

const Date = styled.span`
  color: var(--accent-secondary);
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
`;

const Institution = styled.h3`
  margin: 0.7rem 0;
  color: var(--white);
  font-size: 1.3rem;
`;

const Degree = styled.p`
  color: var(--text-secondary);
  margin-bottom: 0.8rem;
  font-weight: 500;
`;

const Description = styled.p`
  color: var(--text-light);
  font-size: 0.95rem;
  line-height: 1.7;
  opacity: 0.85;
`;

const Pill = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.8rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: var(--text-secondary);
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-top: 0.6rem;
`;

const education = [
  {
    id: 1,
    date: "11/2019 - 04/2020",
    institution: "Luminus Technical University College",
    degree: "Advanced Software Development",
    description: "Certified full stack developer (900 hours • 8 months) with deep dives into distributed systems and modern frontend tooling.",
    focus: "Full Stack Engineering",
  },
  {
    id: 2,
    date: "09/2011 - 01/2016",
    institution: "Tafila Technical University",
    degree: "Bachelor of Civil Engineering",
    description: "Solid engineering foundation with emphasis on structural analysis, technical research, and problem-solving methodologies.",
    focus: "Engineering Fundamentals",
  },
];

const Education = () => {
  return (
    <Timeline>
      {education.map((item) => (
        <TimelineItem key={item.id}>
          <TimelineContent>
            <Date>{item.date}</Date>
            <Institution>{item.institution}</Institution>
            <Degree>{item.degree}</Degree>
            <Description>{item.description}</Description>
            <Pill>{item.focus}</Pill>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default Education;
