import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { Input, Form } from 'semantic-ui-react';
import "semantic-ui-css/semantic.min.css";
import { searchAction, moviesInfoAction, showMoviesAction, showDetailsAction } from '../actions';

const SearchBar = () => {
  const axios = require('axios').default;
    const dispatch = useDispatch();
    const showMovies = useSelector(state => state.showMovies);
    const showDetails = useSelector(state => state.showDetails);
    const setSearch = useSelector(state => state.search);
    
    const options = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/auto-complete',
        params: {q: setSearch },
        headers: {
            'x-rapidapi-host': 'imdb8.p.rapidapi.com',
            'x-rapidapi-key': process.env.REACT_APP_MOVIE_KEY
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        axios
            .request(options)
            .then((response) => {
                dispatch(moviesInfoAction(response?.data?.d));
                
                if (!showMovies) dispatch(showMoviesAction());
                if (showDetails) dispatch(showDetailsAction());
            }).catch((err) => console.error(err));
    }
    
    return (
        <Wrapper>
            <Content>
                <Form onSubmit={handleSubmit}>
                    <Input 
                        type="text"
                        placeholder="Search movies..."
                        icon="search"
                        size="massive"                            
                        onChange={(e) => dispatch(searchAction(e.target.value))}
                    />
                </Form>
            </Content>
        </Wrapper>
    );
}

// styled-components

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
  background: var(--darkGrey);
  padding: 0 20px;
`;

const Content = styled.div`
  position: relative;
  width: 90%;
  height: 58px;
  margin: 0 auto;
  border-radius: 9px;
  color: var(--white);
`;

export default SearchBar;
