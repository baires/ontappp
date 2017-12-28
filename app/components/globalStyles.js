import { injectGlobal } from 'styled-components';
import { beerColors, convertToSlug } from '../constants/beers';

injectGlobal`
  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.4rem;
    position: relative;
    background: #f7971e;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background: -webkit-radial-gradient(circle, #fbb600, #da5900);/* stylelint-disable-line */
    background: radial-gradient(circle, #fbb600, #da5900);/* stylelint-disable-line */
  }

  body::before {
    color: #fff;
    left: 1rem;
    position: absolute;
    opacity: 0.4;
    top: 1rem;
  }

  html,
  body {
    height: 100%;
    width: 100%;
    font-family: 'Alegreya', serif;
  }

  /* stylelint-disable */
  ${beerColors.map(
    beer => `.${convertToSlug(beer.name)} {
              background: ${beer.PrimaryColor};
              background: -webkit-radial-gradient(circle, ${
                beer.PrimaryColor
              }, ${beer.SecondaryColor});
              background: radial-gradient(circle, ${beer.PrimaryColor}, ${
      beer.SecondaryColor
    });
            }
            .${convertToSlug(beer.name)}::before {
              content: 'Flavor: ${beer.name}';
            }`
  )}

  *, *:before,
  *:after {
    box-sizing: inherit;
  }

  html,
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ol,
  ul,
  li {
    margin: 0;
    padding: 0;
    line-height: 1;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ol,
  ul,
  li {
    font-family: 'Nunito', sans-serif;
  }
`;
