import React from 'react';
import { Container, Divider } from "semantic-ui-react";
import AppHeader from '../components/AppHeader';
import MovieList from '../components/MovieList';
import MovieDetails from '../components/MovieDetails';

const DetailsScreen = () => {
  return (
    <>
      <AppHeader />
      <Container>
        <MovieDetails />
      </Container>
      <Divider />
      <Container>
        <h3>More movies like this:</h3>
          <MovieList />
      </Container>
    </>
  );
}

export default DetailsScreen;
