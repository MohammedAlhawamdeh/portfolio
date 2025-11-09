import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700&family=Jost:wght@400;500;600;700&display=swap');

  :root {
    --white: #f8fafc;
    --background: #030617;
    --background-dark: #050a1f;
    --background-darker: #01030a;
    --surface: rgba(9, 13, 30, 0.7);
    --surface-strong: rgba(15, 23, 42, 0.95);
    --surface-border: rgba(148, 163, 184, 0.25);
    --accent: #a855f7;
    --accent-light: #c084fc;
    --accent-secondary: #22d3ee;
    --text-primary: #e2e8f0;
    --text-secondary: #94a3b8;
    --text-light: #f8fafc;
    --border: rgba(148,163,184,0.25);
    --error: #fb7185;
    --success: #4ade80;
    --hero-gradient: radial-gradient(circle at 20% 20%, rgba(99,102,241,0.45), transparent 45%), radial-gradient(circle at 80% 0%, rgba(8,145,178,0.5), transparent 50%), linear-gradient(135deg, #030617 0%, #050a1f 60%, #020617 100%);
    --glass-border: 1px solid rgba(255, 255, 255, 0.08);
    --shadow: 0 20px 60px rgba(2, 6, 23, 0.8);
    --shadow-hover: 0 25px 70px rgba(79, 70, 229, 0.35);
    --blur: blur(22px);
    --section-spacing: clamp(4rem, 8vw, 8rem);
    --gradient-accent: linear-gradient(120deg, #a855f7 0%, #6366f1 45%, #22d3ee 100%);
  }

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Jost', 'Rubik', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: var(--background);
    background-image:
      radial-gradient(circle at 20% 20%, rgba(168, 85, 247, 0.08), transparent 40%),
      radial-gradient(circle at 80% 0%, rgba(14, 165, 233, 0.08), transparent 45%),
      linear-gradient(145deg, #030617 0%, #020617 50%, #050a1f 100%);
    color: var(--text-primary);
    line-height: 1.75;
    min-height: 100vh;
  }

  main {
    position: relative;
    z-index: 1;
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: color 0.3s ease, opacity 0.3s ease;
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
    display: block;
  }

  ul, ol {
    list-style: none;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Rubik', 'Jost', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    font-weight: 600;
    line-height: 1.2;
    color: var(--white);
    letter-spacing: -0.01em;
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

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #a855f7, #22d3ee);
    border-radius: 999px;
  }

  ::selection {
    background: rgba(168, 85, 247, 0.35);
    color: var(--white);
  }
`;

export default GlobalStyles;
