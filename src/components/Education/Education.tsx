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

const Institution = styled.h3`
  margin: 0.5rem 0;
  color: var(--white);
  font-size: 1.2rem;
`;

const Degree = styled.p`
  color: var(--text-light);
  margin-bottom: 0.5rem;
  font-weight: 500;
  opacity: 0.9;
`;

const Description = styled.p`
  color: var(--text-light);
  font-size: 0.95rem;
  line-height: 1.6;
  opacity: 0.8;
`;

const education = [
  {
    id: 1,
    date: "11/2019 - 04/2020",
    institution: "Luminus Technical University College",
    degree: "Advanced Software Development",
    description: "Certified full stack developer (900 hours - 8 months)",
  },
  {
    id: 2,
    date: "09/2011 - 01/2016",
    institution: "Tafila Technical University",
    degree: "Bachelor Degree in Civil Engineering",
    description: "Focus on engineering principles and technical applications",
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
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default Education;
