import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    /* Base colors */
    --white: #ffffff;
    --background: #ffffff;
    --background-dark: #0a192f;  /* Darker blue */
    --background-darker: #020c1b; /* Even darker blue for gradients */
    --accent: #ff6e40;  /* Orange */
    --accent-light: #ff916d;
    
    /* Text colors */
    --text-primary: #2d3436;
    --text-secondary: #636e72;
    --text-light: #ffffff;
    
    /* Additional colors */
    --border: #e0e0e0;
    --error: #ff4757;
    --success: #2ed573;
    
    /* Gradients */
    --hero-gradient: linear-gradient(
      135deg,
      var(--background-darker) 0%,
      var(--background-dark) 100%
    );
    
    /* Shadows */
    --shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    --shadow-hover: 0 8px 12px rgba(0, 0, 0, 0.15);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: var(--background);
    color: var(--text-primary);
    line-height: 1.6;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    border: none;
    outline: none;
    background: none;
    font-family: inherit;
    cursor: pointer;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  ul, ol {
    list-style: none;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    line-height: 1.2;
  }

  p {
    margin-bottom: 1rem;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  @media (max-width: 768px) {
    html {
      font-size: 14px;
    }
  }

  /* Scrollbar styling */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: var(--background);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--accent);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--accent-light);
  }

  /* Selection styling */
  ::selection {
    background-color: var(--accent);
    color: white;
  }
`;

export default GlobalStyles;