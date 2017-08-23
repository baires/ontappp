import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import { Column } from 'hedron';

const VenueContainer = props => {
  const venue = props.result;
  const opening = venue.opening_hours;
  const isOpen = opening.open_now === true;

  const Open = styled.span`
    color: ${isOpen ? '#009688' : '#f44336'};
    text-align: center;
    text-transform: uppercase;
    font-size: 3rem;
    margin-bottom: 2rem;
    display: inline-block;
  `;
  const JointStyled = styled.span`
    font-size: 3rem;
    display: inline-block;
    padding-right: 1rem;
    margin-bottom: 1rem;
  `;

  const OpenList = styled.li`
    font-size: 1.5rem;
    margin-bottom: 1rem;
    list-style: none;
  `;

  const LinkStyled = styled.a`
    color: #fff;
    cursor: pointer;
  `;
  const VicinityStyled = styled.h5`
    margin-bottom: 2rem;
    line-height: 1.2;
  `;

  const StyledColumn = styled(Column)`
    text-align: center;
  `;

  const Link = ({ children, href }) =>
    <LinkStyled href={href}>
      {children}
    </LinkStyled>;

  const IsOpenNow = () => {
    if (opening) {
      return (
        <Open>
          {opening.open_now ? 'Si 😍' : 'No 😢'}
        </Open>
      );
    }
    return (
      <Open>
        {'Quizas'}
      </Open>
    );
  };

  const Joint = () =>
    <JointStyled>
      {venue.address_components[2].long_name}
      {'?'}
    </JointStyled>;

  const Vicinity = () =>
    <VicinityStyled>
      {venue.formatted_address}
    </VicinityStyled>;

  const WeekDays = () =>
    <div>
      {opening.weekday_text.map((day, i) =>
        // eslint-disable-next-line
        <OpenList key={i}>
          <p>
            {day
              .replace(/Closed/, 'Cerrado')
              .replace(/Monday/gi, 'Lunes')
              .replace(/Tuesday/gi, 'Martes')
              .replace(/Wednesday/gi, 'Miercoles')
              .replace(/Thursday/gi, 'Jueves')
              .replace(/Friday/gi, 'Viernes')
              .replace(/Saturday/gi, 'Sabado')
              .replace(/Sunday/gi, 'Domingo')}
          </p>
        </OpenList>
      )}
    </div>;

  return (
    <StyledColumn sm={6} md={6} lg={4} xs={6}>
      <h3>
        <Link href={venue.url}>
          <Joint />
        </Link>
        <IsOpenNow />
      </h3>
      <Vicinity />

      <ul>
        <WeekDays />
      </ul>
    </StyledColumn>
  );
};

VenueContainer.propTypes = {
  result: PropTypes.object,
  children: PropTypes.node,
  href: PropTypes.object
};

export default VenueContainer;
