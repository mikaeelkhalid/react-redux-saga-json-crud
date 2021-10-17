import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadUserStart } from '../redux/actions';

import DataTable from '../components/DataTable';

const Home = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(loadUserStart());
  }, []);

  const handleDelete = (id) => {
    console.log('clicked', id);
  };

  return <DataTable users={users} handleDelete={handleDelete} />;
};

export default Home;
