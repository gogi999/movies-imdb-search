import React from 'react'; 
import styled from 'styled-components';
import SearchBar from './SearchBar';
import RMDBLogo from '../images/react-movie-logo.svg'

const AppHeader = () => {
    return (
        <Wrapper>
            <Content>
                <LogoImg src={RMDBLogo} alt='rmdb-logo' />
                <SearchBar />
            </Content>
        </Wrapper>
    );
}

const Wrapper = styled.div`
  background: var(--darkGrey);
  padding: 0 20px;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--maxWidth);
  padding: 20px 0;
  margin: 0 auto;
`;

const LogoImg = styled.img`
  width: 360px;
  @media screen and (max-width: 500px) {
    width: 150px;
  }
`;


export default AppHeader;
