import React from 'react';
import { useSelector } from 'react-redux';
import MainScreen from '../screens/MainScreen';
import DetailsScreen from '../screens/DetailsScreen';

const Movies = () => {
  const showDetails = useSelector(state => state.showDetails);

  return (
    <>
      {showDetails ? <DetailsScreen /> : <MainScreen />}
    </>
  );
}

export default Movies;
