import React from 'react';
import styled from 'styled-components';
import { Card, Container } from 'semantic-ui-react';
import { useSelector } from 'react-redux';
import MovieCover from './MovieCover';

const MovieList = () => {
  const showMovies = useSelector(state => state.showMovies);
  const moviesInfo = useSelector(state => state.moviesInfo);
  const showDetails = useSelector(state => state.showDetails);
  const movies = moviesInfo[0] || [];

  return (
    <>
      {showDetails && moviesInfo ? (
        <Container>
          <Card.Group itemsPerRow="10" doubling centered>
            {movies.map((movie) => (
              <MovieCover 
                key={movie.id} 
                movie={movie} 
                title={movie.l}
              />
            ))}
          </Card.Group>
        </Container>
      ) : null}
      {showMovies ? (
        <Wrapper>
          <Content>
            {movies.map((movie) => (
              <MovieCover 
                key={movie.id} 
                movie={movie} 
                title={movie.l}
              />
            ))}       
          </Content>
        </Wrapper>
      ) : null}
    </>  
  );
}

// styled-components

const Wrapper = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 0 20px;

  h1 {
    color: var(--medGrey);

    @media screen and (max-width: 768px) {
      font-size: var(--fontBig);
    }
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 2rem;
`;

export default MovieList;
