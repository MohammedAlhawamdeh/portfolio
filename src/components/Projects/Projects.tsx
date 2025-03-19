import styled from "styled-components";
import { motion } from "framer-motion";
import { SectionTitle } from "../../styles/SharedStyles";

const Section = styled.section`
  padding: 6rem 0;
  background-color: var(--white);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const ProjectCard = styled(motion.div)`
  background-color: var(--white);
  border-radius: 10px;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: var(--shadow);
  border: 1px solid var(--border);

  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-hover);
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      transparent 0%,
      rgba(0, 0, 0, 0.2) 100%
    );
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;

    ${ProjectCard}:hover & {
      transform: scale(1.1);
    }
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: var(--background-dark);
`;

const ProjectDescription = styled.p`
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TechTag = styled.span`
  background-color: rgba(10, 25, 47, 0.05);
  color: var(--background-dark);
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.85rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: var(--background-dark);
    color: var(--white);
  }
`;

const Links = styled.div`
  display: flex;
  gap: 1rem;
`;

const LinkButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--background-dark);
  font-size: 0.95rem;
  text-decoration: none;
  transition: all 0.3s ease;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  border: 1px solid var(--background-dark);

  &:hover {
    background-color: var(--background-dark);
    color: var(--white);
  }
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem 0;
`;

const projects = [
  {
    id: 1,
    title: "Golden Shoe Store",
    description: "An ecommerce app built with React.",
    image: "/ss.png",
    tech: ["React", "NodeJS", "Bootstrap", "Redux"],
    demoLink: "https://goldenshoesapp.herokuapp.com/",
    codeLink: "https://github.com/MohammedAlhawamdeh/golden-shoe",
  },
  {
    id: 2,
    title: "Project Two",
    description: "Full-stack application with Node.js backend.",
    image: "/project2.jpg",
    tech: ["Node.js", "Express", "MongoDB"],
    demoLink: "https://demo.com",
    codeLink: "https://github.com/MohammedAlhawamdeh/project2",
  },
  {
    id: 3,
    title: "Project Three",
    description: "Mobile-first responsive design project.",
    image: "/project3.jpg",
    tech: ["React", "CSS Grid", "Flexbox"],
    demoLink: "https://demo.com",
    codeLink: "https://github.com/MohammedAlhawamdeh/project3",
  },
];

const Projects = () => {
  return (
    <Section id="projects">
      <Container>
        <SectionTitle as={motion.h2} {...fadeIn}>
          Projects
        </SectionTitle>
        <ProjectGrid>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectImage>
                <img src={project.image} alt={project.title} />
              </ProjectImage>
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <TechStack>
                  {project.tech.map((tech) => (
                    <TechTag key={tech}>{tech}</TechTag>
                  ))}
                </TechStack>
                <Links>
                  <LinkButton
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo →
                  </LinkButton>
                  <LinkButton
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Code →
                  </LinkButton>
                </Links>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectGrid>
      </Container>
    </Section>
  );
};

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export default Projects;
