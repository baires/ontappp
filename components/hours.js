import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Column, Row } from 'hedron';
import Modal from './modal';

class Hours extends React.Component {
  state = {
    showModal: false
  };

  componentDidMount() {
    // eslint-disable-next-line
    this.setState({ showModal: false });
  }

  closeModal = () => this.setState({ showModal: false });
  openModal = () => this.setState({ showModal: true });

  render() {
    const venue = this.props.result;

    const Open = styled.span`
      color: ${props => (props.yupe ? '#009688' : '#f44336')};
      text-align: center;
      text-transform: uppercase;
      font-size: 3rem;
      margin-bottom: 2rem;
      display: inline-block;
    `;

    const OpenModalText = styled.a`
      text-align: center;
      display: block;
      cursor: pointer;

      &:focus {
        outline-width: 0;
      }
    `;

    const OpenList = styled.li`
      font-size: 1.5rem;
      margin-bottom: 1rem;
      list-style: none;
    `;

    const JointStyled = styled.span`
      font-size: 3rem;
      display: inline-block;
      padding-right: 1rem;
      margin-bottom: 1rem;
    `;

    const LinkStyled = styled.a`
      color: #fff;
      cursor: pointer;
    `;

    const VicinityStyled = styled.h5`
      margin-bottom: 2rem;
      line-height: 1.2;
    `;

    const Link = ({ children, href }) => (
      <LinkStyled href={href}>{children}</LinkStyled>
    );

    const IsOpenNow = ({ isOpen }) => (
      <Open yupe={isOpen}>{isOpen === true ? 'Si 😍' : 'No 😢'}</Open>
    );

    const formatAddress = /(<span(?: \w+="[^"]+")*(?: \w+="[^"]+")*>([^<]*)<\/span>)/g;

    const Address = ({ data }) => (
      <VicinityStyled>{data.replace(formatAddress, '$2')}</VicinityStyled>
    );

    return (
      <div>
        <Modal show={this.state.showModal} onClose={this.closeModal}>
          <Row>
            {venue.map((item, e) => (
              // eslint-disable-next-line
              <Column key={e} sm={6} md={6} lg={4} xs={12}>
                <h3>
                  <Link href={item.result.url}>
                    <JointStyled>
                      {item.result.address_components[2].long_name}
                      {'?'}
                    </JointStyled>
                  </Link>
                  <IsOpenNow isOpen={item.result.opening_hours.open_now} />
                </h3>

                <Address data={item.result.adr_address} />
                {item.result.opening_hours.weekday_text.map((day, i) => (
                  // eslint-disable-next-line
                  <OpenList key={i}>
                    {day
                      .replace(/Closed/, 'Cerrado')
                      .replace(/Monday/gi, 'Lunes')
                      .replace(/Tuesday/gi, 'Martes')
                      .replace(/Wednesday/gi, 'Miercoles')
                      .replace(/Thursday/gi, 'Jueves')
                      .replace(/Friday/gi, 'Viernes')
                      .replace(/Saturday/gi, 'Sabado')
                      .replace(/Sunday/gi, 'Domingo')}
                  </OpenList>
                ))}
              </Column>
            ))}
          </Row>
        </Modal>

        <OpenModalText role="button" tabIndex="0" onClick={this.openModal}>
          * Más Información
        </OpenModalText>
      </div>
    );
  }
}

Hours.propTypes = {
  result: PropTypes.array
};

export default Hours;
