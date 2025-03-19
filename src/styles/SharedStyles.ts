import styled from 'styled-components';

export const SectionContainer = styled.section`
  padding: 5rem 0;
`;

export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: var(--text-primary);
  
  &::after {
    content: '';
    display: block;
    width: 50px;
    height: 3px;
    background-color: var(--accent);
    margin: 0.5rem auto 0;
  }
`;

export const Card = styled.div`
  background-color: var(--background-card);
  border-radius: 10px;
  box-shadow: var(--shadow);
  overflow: hidden;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  width: 100%;
`;

export const Button = styled.button`
  padding: 0.8rem 2rem;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid var(--accent);

  &.primary {
    background-color: var(--accent);
    color: white;

    &:hover {
      background-color: transparent;
      color: var(--accent);
    }
  }

  &.secondary {
    background-color: transparent;
    color: var(--accent);

    &:hover {
      background-color: var(--accent);
      color: white;
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
  padding: 0.8rem;
  border: 1px solid var(--border);
  border-radius: 5px;
  font-size: 1rem;
  background-color: var(--background-light);
  color: var(--text-primary);
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--accent);
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid var(--border);
  border-radius: 5px;
  font-size: 1rem;
  background-color: var(--background-light);
  color: var(--text-primary);
  resize: vertical;
  min-height: 150px;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--accent);
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