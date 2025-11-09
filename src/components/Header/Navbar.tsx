import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FiMenu, FiX } from 'react-icons/fi';

const Nav = styled.nav<{ scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 82px;
  display: flex;
  align-items: center;
  z-index: 1000;
  transition: background 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease;
  background: ${({ scrolled }) =>
    scrolled
      ? 'rgba(5, 8, 25, 0.85)'
      : 'linear-gradient(90deg, rgba(5, 8, 25, 0.8), rgba(5, 8, 25, 0.35))'};
  border-bottom: ${({ scrolled }) =>
    scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent'};
  backdrop-filter: blur(16px);
  box-shadow: ${({ scrolled }) => (scrolled ? '0 20px 60px rgba(2, 6, 23, 0.65)' : 'none')};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.a`
  font-size: 1.45rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.25em;
  color: var(--white);
  position: relative;
  padding-left: 1.5rem;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 12px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: var(--gradient-accent);
    box-shadow: 0 0 15px rgba(168, 85, 247, 0.8);
  }
`;

const NavLinks = styled.div<{ isOpen: boolean }>`
  display: flex;
  gap: 1.5rem;
  align-items: center;

  @media (max-width: 900px) {
    position: fixed;
    inset: 0;
    background: rgba(2, 6, 23, 0.95);
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
    transition: transform 0.35s ease;
  }
`;

const NavLink = styled.a<{ active: boolean }>`
  position: relative;
  padding: 0.35rem 0.8rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  color: ${({ active }) => (active ? 'var(--white)' : 'var(--text-secondary)')};
  text-transform: uppercase;
  font-size: 0.85rem;
  transition: color 0.3s ease;

  &::after {
    content: '';
    position: absolute;
    left: 0.8rem;
    right: 0.8rem;
    bottom: -6px;
    height: 2px;
    background: var(--gradient-accent);
    opacity: ${({ active }) => (active ? 1 : 0)};
    transform: scaleX(${({ active }) => (active ? 1 : 0)});
    transform-origin: center;
    transition: transform 0.3s ease, opacity 0.3s ease;
  }

  &:hover {
    color: var(--white);
  }
`;

const MenuButton = styled.button`
  display: none;
  width: 48px;
  height: 48px;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  background: rgba(3, 6, 23, 0.6);
  color: var(--white);

  @media (max-width: 900px) {
    display: grid;
    place-items: center;
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
          {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
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
