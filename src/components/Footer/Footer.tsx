import styled from "styled-components";

const FooterContainer = styled.footer`
  padding: 2.5rem 0;
  background: linear-gradient(180deg, rgba(3, 6, 23, 0.85) 0%, rgba(3, 6, 23, 1) 100%);
  border-top: 1px solid rgba(255, 255, 255, 0.08);
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-items: center;
  text-align: center;
`;

const Tagline = styled.p`
  margin: 0;
  color: var(--text-secondary);
  font-size: 0.95rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

const Copyright = styled.p`
  color: var(--white);
  font-size: 0.85rem;
  opacity: 0.8;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <Content>
        <Tagline>Shipping thoughtful web experiences</Tagline>
        <Copyright>© {currentYear} Mohammed Alhawamdeh · All rights reserved</Copyright>
      </Content>
    </FooterContainer>
  );
};

export default Footer;
