import React from 'react';
import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  to {
    opacity: 0.5;
    transform: scale(0.8);
  }
`;

const Loader = () => {
  const BeerMugLoader = styled.div`
    text-align: center;
    position: fixed;
    background: #fff;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    overflow-y: hidden;
    overflow-x: hidden;

    div {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
    }

    span {
      animation: ${pulse} 0.4s alternate infinite ease-in-out;
      font-size: 8rem;
      display: inline-block;
      width: 100%;
      font-weight: normal;
    }

    small {
      display: block;
      color: #444;
      font-size: 2rem;
      margin-top: 2rem;
    }
  `;
  return (
    <BeerMugLoader>
      <div>
        <span role="img" aria-label="BeerMug">
          <img
            alt={'Beer Mug'}
            src={
              'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAn1BMVEX/zE3/rDPh6O3/rjUAAAD/zE3/zE3h6O3h6O3/rDP/zE3/zE3/rDP/zE3/rDP/rDP/rDPh6O3h6O3/rDPh6O3h6O3/rDPh6O3h6O3/rDP/rDPh6O3/tDr0kAz1lBD7tjX/vED/wEP/zE3/rDPh6O37tErn3crj5OHwypDl4db/rjXs0qf/sDbp2b/0w3n5t1b/yEr/wkX/uD32v23/sjjNd/hjAAAAHHRSTlMAAAAAAGDvj0BAIL9gzyC/z5+v7yDPEO+/cIBgjlf8BgAAAYFJREFUeNrt11tvgjAYgOGyTQFFRZnupKi0gOJhzPH/f9vKaknZ2kKhF27hTYwfEJ5WrhA8kKwZqtnUuuMFyJeJFDLF0BQpNRNBJlLM5EMWUs7iQlN1aMaFUIM66C9C8NrEMUgAf5pBNHesCYLeuAUUQya3BXSAbE5jKA5L0OQKPSNOe5nzDstdobcf295j5jOMmRsPdIri/CiEfMiYs04ESWFUnAlhxF4zvrNfvV/Q4xP3559PCHc65/Mu38qO3kZaeGUol+bM6qQjFGbQnBJEYla/HDHzkSawKLnQKUvw0T3N5kCwKAtIaVacSYOMvQaKZFCSBrTtEuKW23ze5FvZBNUQs7qsaohZvR0U0G4OWvv+WjQrQf5q5YtmJWiFE80d1EEd1EE3C9m6IEcTtPC0QPaLB1tCkHa70EQX5GiCXEMP5I31QC52WkL0b1ZjCMj6x5DSi5YspVc/WcOgdkMp1KsP9YC0UV1nBOQN+vWc/gBUSaNa+yGOvN6w8jmLn88XaZr9bxEh36QAAAAASUVORK5CYII='
            }
          />
          <small>Loading the beer...</small>
        </span>
      </div>
    </BeerMugLoader>
  );
};

export default Loader;
