import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: var(--background-darker);
  padding: 2rem 0;
  color: var(--text-light);
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Copyright = styled.p`
  color: var(--text-light);
  font-size: 0.9rem;
  opacity: 0.8;
  text-align: center;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <Content>
        <Copyright>
          © {currentYear} Mohammed Alhawamdeh • All rights reserved
        </Copyright>
      </Content>
    </FooterContainer>
  );
};

export default Footer;
