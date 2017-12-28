import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  text-align: center;
  right: 0;
  left: 0;
  bottom: 1rem;
  position: absolute;

  h2 {
    font-size: 1rem;
    margin: 2rem 0;
    color: #fff;
  }
`;

const Footer = () => (
  <FooterContainer>
    <h2>by baires</h2>
  </FooterContainer>
);

export default Footer;
