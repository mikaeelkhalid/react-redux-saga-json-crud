import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadUserStart } from '../redux/actions';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUserStart());
  }, []);

  return <div>home</div>;
};

export default Home;
