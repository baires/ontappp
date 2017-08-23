import React from 'react';
import styled from 'styled-components';
import dynamic from 'next/dynamic';

import bubbles from '../constants/bubbles';

const Particles = dynamic(import('react-particles-js'));

const Wrapper = styled.div`
  canvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
`;

const ParticlesContainer = () =>
  <Wrapper>
    <Particles params={bubbles} />
  </Wrapper>;

export default ParticlesContainer;
