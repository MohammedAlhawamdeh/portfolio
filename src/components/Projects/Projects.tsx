import styled from "styled-components";
import { motion } from "framer-motion";
import { SectionTitle } from "../../styles/SharedStyles";

const Section = styled.section`
  padding: var(--section-spacing) 0;
  background: radial-gradient(circle at 10% 20%, rgba(148, 163, 184, 0.12), transparent 45%),
    var(--background);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const Intro = styled.div`
  max-width: 760px;
  margin: 0 auto;
  text-align: center;
  color: var(--text-secondary);
  line-height: 1.8;

  span {
    display: block;
    font-size: 0.8rem;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: 0.8rem;
  }
`;

const ProjectList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

const ProjectCard = styled(motion.article)`
  background: rgba(3, 6, 23, 0.8);
  border-radius: 32px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: var(--shadow);
  padding: clamp(1.5rem, 4vw, 3rem);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: clamp(1.5rem, 3vw, 4rem);
  align-items: center;

  @media (max-width: 768px) {
    padding: 1.75rem;
  }
`;

const ProjectImage = styled.div`
  position: relative;
  border-radius: 24px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.08);
  min-height: 280px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
    transform: scale(1.02);
  }

  ${ProjectCard}:hover & img {
    transform: scale(1.08);
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(2, 6, 23, 0) 20%, rgba(2, 6, 23, 0.8) 100%);
  }
`;

const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const MetaRow = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  font-size: 0.85rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--text-secondary);
`;

const ProjectTitle = styled.h3`
  font-size: clamp(1.8rem, 4vw, 2.6rem);
  color: var(--white);
  margin: 0;
`;

const ProjectDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.8;
  margin: 0;
`;

const TechRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

const TechChip = styled.span`
  padding: 0.4rem 1rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  text-transform: uppercase;
  font-size: 0.75rem;
  letter-spacing: 0.15em;
  color: var(--text-secondary);
`;

const ActionRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const PrimaryLink = styled.a`
  padding: 0.85rem 1.9rem;
  border-radius: 999px;
  background: var(--gradient-accent);
  color: var(--white);
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: 0.85rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-3px);
  }
`;

const GhostLink = styled.a`
  padding: 0.85rem 1.9rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: var(--white);
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: 0.85rem;
  transition: background 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
  }
`;

const projects = [
  {
    id: 6,
    title: "KWIK SAAS",
    role: "SaaS Platform",
    impact: "Business operations",
    description:
      "A comprehensive SaaS platform designed to streamline business operations and enhance productivity with modern tools.",
    image: "/kwiksaas.png",
    tech: ["React", "TypeScript", "NodeJS", "Tailwind"],
    demoLink: "https://www.kwiksaasapp.com/",
    codeLink: null,
  },
  {
    id: 1,
    title: "KWIK CV",
    role: "Product Experience",
    impact: "10k+ resumes shipped",
    description:
      "A modern CV builder that helps job seekers publish polished resumes in minutes with live previews, modular sections, and guided copy.",
    image: "/kwikcv.png",
    tech: ["React", "TypeScript", "CSS", "HTML"],
    demoLink: "https://www.kwikcv.com",
    codeLink: null,
  },
  {
    id: 2,
    title: "Kwik Fluency",
    role: "AI Speaking Coach",
    impact: "Realtime pronunciation feedback",
    description:
      "Conversational AI companion that simulates human dialogues, detects pronunciation gaps, and coaches learners toward confident English delivery.",
    image: "/kwikfluency.png",
    tech: ["Next.js", "TypeScript", "Tailwind", "OpenAI"],
    demoLink: "https://www.kwikfluency.com",
    codeLink: null,
  },
  {
    id: 3,
    title: "Golden Shoe Store",
    role: "Ecommerce Stack",
    impact: "Headless storefront",
    description:
      "High-converting footwear shop with tailored merchandising, promo engines, and Redux-powered cart/checkout flows.",
    image: "/ss.png",
    tech: ["React", "NodeJS", "Bootstrap", "Redux"],
    demoLink: "https://golden-shoe-store-h4czb.ondigitalocean.app/",
    codeLink: "https://github.com/MohammedAlhawamdeh/golden-shoe",
  },
  {
    id: 4,
    title: "Finance Tracker",
    role: "Data Viz Suite",
    impact: "Budget insights",
    description:
      "CRUD dashboard for personal finances with smart categorisation, timeline visualisations, and export-ready reports.",
    image: "/1.png",
    tech: ["React", "TypeScript"],
    demoLink: "https://finance-tracking-app-xcdse.ondigitalocean.app/",
    codeLink: "https://github.com/MohammedAlhawamdeh/finance-tracker",
  },
  {
    id: 5,
    title: "Movie App",
    role: "Full-Stack Delivery",
    impact: "Realtime catalog",
    description:
      "Streaming discovery platform built with a Node/React stack, complete with favorites, reviews, and aggregated ratings.",
    image: "/movieapp.png",
    tech: ["React", "Tailwind", "NodeJS", "Redux", "MongoDB"],
    demoLink: "https://movier-app-nrimg.ondigitalocean.app/",
    codeLink: "https://github.com/MohammedAlhawamdeh/movie-app",
  },
];

const Projects = () => {
  return (
    <Section id="projects">
      <Container>
        <SectionTitle as={motion.h2} {...fadeIn}>
          Projects
        </SectionTitle>
        <Intro>
          <span>Selected work</span>
          Multi-platform builds spanning AI copilots, ecommerce, and interactive dashboards. Every product pairs
          immersive UI with resilient engineering and measurable impact.
        </Intro>
        <ProjectList>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <ProjectImage style={index % 2 !== 0 ? { order: 2 } : undefined}>
                <img src={project.image} alt={project.title} />
              </ProjectImage>
              <ProjectContent style={index % 2 !== 0 ? { order: 1 } : undefined}>
                <MetaRow>
                  <span>{project.role}</span>
                  <span>{project.impact}</span>
                </MetaRow>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <TechRow>
                  {project.tech.map((tech) => (
                    <TechChip key={`${project.id}-${tech}`}>{tech}</TechChip>
                  ))}
                </TechRow>
                <ActionRow>
                  {project.demoLink && (
                    <PrimaryLink href={project.demoLink} target="_blank" rel="noopener noreferrer">
                      Live Demo
                    </PrimaryLink>
                  )}
                  {project.codeLink && (
                    <GhostLink href={project.codeLink} target="_blank" rel="noopener noreferrer">
                      Code
                    </GhostLink>
                  )}
                </ActionRow>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectList>
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
