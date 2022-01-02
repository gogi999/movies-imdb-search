import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { Card } from 'semantic-ui-react';
import { movieDetailAction, showDetailsAction } from '../actions';
import notFound from '../images/not-found.gif';

const MovieCover = ({ movie, title }) => {
  const dispatch = useDispatch();
  const showDetails = useSelector(state => state.showDetails);

  const handleSubmit = () => {
    dispatch(movieDetailAction(movie));
    if (!showDetails) dispatch(showDetailsAction());
  }

  return (
    <>
      {movie.i === undefined ? (
        <Card
          fluid
          onClick={handleSubmit}
          style={{ marginTop: 20 }}
        >
          <Image src={notFound} fluid />
          <Card.Header textAlign="center">{title}</Card.Header>
        </Card>
      ) : (
        <Card
          fluid
          onClick={handleSubmit}
          style={{ marginTop: 20 }}
        >
          <Image src={movie.i.imageUrl} fluid />
          <Card.Header textAlign="center">{title}</Card.Header>
        </Card>
      )}
    </>
  );
}

const Image = styled.img`
  width: 100%;
  max-width: 720px;
  transition: all 0.3s;
  object-fit: cover;
  border-radius: 20px;
  animation: animateThumb 0.5s;
  :hover {
    opacity: 0.8;
  }
  @keyframes animateThumb {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export default MovieCover;
