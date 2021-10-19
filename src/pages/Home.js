import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { deleteUserStart, loadUserStart } from '../redux/actions';

import { MDBSpinner } from 'mdb-react-ui-kit';

import DataTable from '../components/DataTable';
import { toast } from 'react-toastify';

const Home = () => {
  const dispatch = useDispatch();
  const { users, isLoading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(loadUserStart());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  if (isLoading) {
    return (
      <MDBSpinner style={{ marginTop: '200px' }} role='status'>
        <span className='visually-hidden'>Loading..</span>
      </MDBSpinner>
    );
  }
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      dispatch(deleteUserStart(id));
      toast.success('User deleted successfully');
    }
  };

  return <DataTable users={users} handleDelete={handleDelete} />;
};

export default Home;
