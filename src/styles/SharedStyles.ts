import styled from 'styled-components';

export const SectionContainer = styled.section`
  padding: var(--section-spacing) 0;
  position: relative;
`;

export const SectionTitle = styled.h2`
  font-size: clamp(2.4rem, 4vw, 3.5rem);
  text-align: center;
  margin-bottom: 3rem;
  background: var(--gradient-accent);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  position: relative;

  &::after {
    content: '';
    width: 110px;
    height: 3px;
    background: var(--gradient-accent);
    display: block;
    margin: 1rem auto 0;
    border-radius: 999px;
    opacity: 0.7;
  }
`;

export const Card = styled.div`
  background: linear-gradient(135deg, rgba(10, 12, 29, 0.85), rgba(16, 18, 45, 0.92));
  border-radius: 20px;
  padding: 2rem;
  border: var(--glass-border);
  box-shadow: var(--shadow);
  backdrop-filter: blur(18px);
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  width: 100%;
`;

export const Button = styled.button`
  padding: 0.9rem 2.4rem;
  border-radius: 999px;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
  border: none;
  color: var(--white);
  background: var(--gradient-accent);
  box-shadow: 0 10px 30px rgba(99, 102, 241, 0.35);

  &:hover {
    transform: translateY(-3px) scale(1.01);
    box-shadow: var(--shadow-hover);
  }

  &.secondary {
    background: transparent;
    border: 1px solid rgba(99, 102, 241, 0.5);
    color: var(--white);
    box-shadow: none;
    backdrop-filter: blur(12px);

    &:hover {
      background: rgba(99, 102, 241, 0.15);
      box-shadow: none;
    }
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.9rem 1.1rem;
  border: 1px solid var(--surface-border);
  border-radius: 14px;
  font-size: 1rem;
  background-color: rgba(15, 23, 42, 0.25);
  color: var(--text-primary);
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--accent);
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.25);
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 0.9rem 1.1rem;
  border: 1px solid var(--surface-border);
  border-radius: 14px;
  font-size: 1rem;
  background-color: rgba(15, 23, 42, 0.25);
  color: var(--text-primary);
  resize: vertical;
  min-height: 150px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--accent);
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.25);
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 1.5rem;
  
  label {
    display: block;
    margin-bottom: 0.5rem;
    color: var(--text-secondary);
  }
`;

export const ErrorMessage = styled.span`
  color: var(--error);
  font-size: 0.875rem;
  margin-top: 0.25rem;
  display: block;
`;

export const SuccessMessage = styled.span`
  color: var(--success);
  font-size: 0.875rem;
  margin-top: 0.25rem;
  display: block;
`;
