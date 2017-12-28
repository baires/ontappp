import React from 'react';
import PropTypes from 'prop-types';
import 'isomorphic-fetch';

import { Page } from 'hedron';
import BodyClassName from 'react-body-classname';

import NoSSR from 'react-no-ssr';

import Loading from '../components/loader';

import { URLS, globallyOpen } from '../constants/venues';
import { beerColors, convertToSlug } from '../constants/beers';

import Container from '../components/container';
import ParticlesContainer from '../components/particles-container';
import Headline from '../components/headline';
import Footer from '../components/footer';
import Header from '../config/header';

import Modal from '../components/hours';

// eslint-disable-next-line
import globalStyles from "../components/globalStyles";

export default class OnTap extends React.Component {
  static async getInitialProps() {
    const VenuePromise = Promise.all(
      URLS.map(url => fetch(url).then(resp => resp.json()))
    );
    const venue = await VenuePromise;

    const venuesOpen = venue.filter(
      c => c.result.opening_hours.open_now === true
    ).length;

    return {
      venue,
      venuesOpen
    };
  }

  render() {
    const { venue, venuesOpen } = this.props;

    const beerClassRandom = Math.floor(Math.random() * beerColors.length);
    const beerClass = convertToSlug(beerColors[beerClassRandom].name);

    return (
      <div>
        <Header />
        <BodyClassName className={beerClass}>
          <NoSSR onSSR={<Loading />}>
            <Container>
              <Page fluid>
                <Headline open={venuesOpen} />
                <Modal result={venue} />
              </Page>
              {globallyOpen(venuesOpen) === 'No' ||
              globallyOpen(venuesOpen) === 'Quizas' ? null : (
                <ParticlesContainer />
              )}
            </Container>
          </NoSSR>
        </BodyClassName>
        <Footer />
      </div>
    );
  }
}

OnTap.propTypes = {
  venue: PropTypes.array.isRequired,
  venuesOpen: PropTypes.number
};
