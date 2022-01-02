import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Header, Grid, Card, Image, Divider } from 'semantic-ui-react';
import notFound from '../images/not-found.jpg';

const MovieDetails = () => {
    const movieDetail = useSelector(state => state.movieDetail);

    return (
        <>
            {movieDetail.i === undefined ? (
                <Wrapper>
                    <Content>
                        <Grid columns="2">
                            <Grid.Column>
                                <Card>
                                    <Image src={notFound} fluid />
                                    <Header textAlign="center" as="h2">
                                        {movieDetail.l}
                                    </Header>
                                </Card>
                            </Grid.Column>
                            <Grid.Column stretched>
                                <Header>Details:</Header>
                                <Divider />
                                <Header>Release date: {movieDetail.y}</Header>
                                <Header>Genres: {movieDetail.q}</Header>
                                <Header>Main actors: {movieDetail.s}</Header>
                                <Header>Rank: {movieDetail.rank}</Header>
                            </Grid.Column>
                        </Grid>
                    </Content>
                </Wrapper>
            ) : (
                <Wrapper>
                    <Content>
                        <Grid columns="2">
                            <Grid.Row verticalAlign="middle">
                                <Grid.Column>
                                    <Card>
                                        <Image src={movieDetail.i.imageUrl} fluid />
                                        <Header textAlign="center" as="h2">
                                            {movieDetail.l}
                                        </Header>
                                    </Card>
                                </Grid.Column>
                                <Grid.Column stretched>
                                    <Header>Details:</Header>
                                    <Divider />
                                    <Header>Release date: {movieDetail.y}</Header>
                                    <Header>Genres: {movieDetail.q}</Header>
                                    <Header>Main actors: {movieDetail.s}</Header>
                                    <Header>Rank: {movieDetail.rank}</Header>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Content>
                </Wrapper>
            )}
        </>
    );
}

// styled-components

const Wrapper = styled.div`
  padding: 40px 20px;
  animation: animateMovieInfo 1s;

  @keyframes animateMovieInfo {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Content = styled.div`
  display: flex;
  max-width: var(--maxWidth);
  margin: 0 auto;
  background: var(--white);
  border-radius: 9px;
  margin-left: 23px;

  @media screen and (max-width: 768px) {
    display: block;
    max-height: none;
  }
`;

export default MovieDetails;
