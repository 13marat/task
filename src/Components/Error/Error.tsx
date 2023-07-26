import React from 'react';
import { useSelector } from 'react-redux';
import { StateType } from '../../types/Types';

const Error = () => {
  const error = useSelector((state: StateType) => state.error);

  return error ? <h1>{error}</h1> : <h1>ERROR...</h1>;
};

export default Error;
