import { useState, useEffect } from 'react';
import styled from 'styled-components';

const Nav = styled.nav<{ scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: ${props => props.scrolled ? 'var(--background)' : 'transparent'};
  transition: all 0.3s ease;
  box-shadow: ${props => props.scrolled ? 'var(--shadow)' : 'none'};
  backdrop-filter: ${props => props.scrolled ? 'blur(10px)' : 'none'};
  z-index: 1000;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--accent);
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: var(--accent-light);
  }
`;

const NavLinks = styled.div<{ isOpen: boolean }>`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    background-color: var(--background-dark);
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    gap: 1.5rem;
    transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-100%)')};
    transition: transform 0.3s ease;
    box-shadow: var(--shadow);
  }
`;

const NavLink = styled.a<{ active: boolean }>`
  color: var(--white);
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  background-color: ${props => props.active ? 'var(--accent)' : 'transparent'};
  opacity: ${props => props.active ? 1 : 0.8};

  &:hover {
    color: var(--white);
    background-color: var(--accent);
    opacity: 1;
  }
`;

const MenuButton = styled.button`
  display: none;
  font-size: 1.5rem;
  color: var(--white);
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: var(--accent);
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'background', 'projects', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }

      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <Nav scrolled={scrolled}>
      <Container>
        <Logo href="#home">MoHawamdeh</Logo>
        <MenuButton onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? '✕' : '☰'}
        </MenuButton>
        <NavLinks isOpen={isOpen}>
          <NavLink href="#home" onClick={closeMenu} active={activeSection === 'home'}>
            Home
          </NavLink>
          <NavLink href="#about" onClick={closeMenu} active={activeSection === 'about'}>
            About
          </NavLink>
          <NavLink href="#background" onClick={closeMenu} active={activeSection === 'background'}>
            Background
          </NavLink>
          <NavLink href="#projects" onClick={closeMenu} active={activeSection === 'projects'}>
            Projects
          </NavLink>
          <NavLink href="#contact" onClick={closeMenu} active={activeSection === 'contact'}>
            Contact
          </NavLink>
        </NavLinks>
      </Container>
    </Nav>
  );
};

export default Navbar;