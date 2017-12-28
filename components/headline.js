import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Animated, { tada } from 'styled-animated';

import { globallyOpen } from '../constants/venues';

const Headliner = styled.header`
  text-align: center;
  padding: 4rem 0;
  width: 90%;
  margin: 0 auto;

  /* stylelint-disable */
  ${breakpoint('desktop')`
    width: 100%;
    margin: 0
  `};

  h1 {
    font-size: 6rem;
  }

  h2 {
    font-size: 8rem;
    margin: 2rem 0;

    ${breakpoint('desktop')`
      font-size: 10rem;
    `};
  }

  sup {
    font-size: 3rem;
  }
`;

const Headline = ({ open }) => (
  <div>
    <Headliner>
      <h1>Ya abrió On Tap?</h1>
      <Animated animationFunction={tada}>
        <h2>
          {globallyOpen(open)}
          {<sup>*</sup>}
        </h2>
      </Animated>
    </Headliner>
  </div>
);

Headline.propTypes = {
  open: PropTypes.number
};

export default Headline;
