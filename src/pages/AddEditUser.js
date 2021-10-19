import React, { useState, useEffect } from 'react';
import { MDBValidation, MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import { useHistory, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { createUserStart, updateUserStart } from '../redux/actions';
import { toast } from 'react-toastify';

const initialState = {
  name: '',
  email: '',
  phone: '',
  address: '',
};

const AddEditUser = () => {
  const [user, setUser] = useState(initialState);
  const { name, email, phone, address } = user;

  const [editMode, setEditMode] = useState(false);

  const history = useHistory();
  const dispatch = useDispatch();

  const { users } = useSelector((state) => state.users);

  const { id } = useParams();

  //console.log(typeof id);

  useEffect(() => {
    if (id) {
      setEditMode(true);
      const user = users.find((user) => user.id === Number(id));
      setUser({ ...user });
    } else {
      setEditMode(false);
      setUser({ ...initialState });
    }
  }, [id]);

  // console.log(user);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && phone && address) {
      if (editMode) {
        dispatch(
          updateUserStart({
            id: Number(id),
            user,
          })
        );
        setEditMode(false);
        toast.success('User updated successfully');
        history.push('/');
      } else {
        dispatch(createUserStart(user));
        toast.success('User created successfully');
        history.push('/');
      }
    }
  };

  const onInputChange = (e) => {
    let { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <MDBValidation
      className='row g-3'
      style={{ marginTop: '70px' }}
      onSubmit={handleSubmit}
      noValidate
    >
      <p className='fs-2 fw-bold'>{editMode ? 'Edit' : 'Add'} user</p>
      <div
        style={{
          margin: 'auto',
          padding: '20px',
          maxWidth: '400px',
          alignContent: 'center',
        }}
        className='col-md-6'
      >
        <MDBInput
          label='Name'
          name='name'
          required
          type='text'
          invalid
          error='wrong'
          success='right'
          value={name || ''}
          onChange={onInputChange}
          validation='name required'
        />
        <br />
        <MDBInput
          label='Email'
          name='email'
          required
          type='email'
          invalid
          error='wrong'
          success='right'
          value={email || ''}
          onChange={onInputChange}
          validation='email required'
        />
        <br />
        <MDBInput
          label='Phone'
          name='phone'
          required
          type='number'
          invalid
          error='wrong'
          success='right'
          value={phone || ''}
          onChange={onInputChange}
          validation='phone required'
        />
        <br />
        <MDBInput
          label='Address'
          name='address'
          type='text'
          invalid
          required
          error='wrong'
          success='right'
          value={address || ''}
          onChange={onInputChange}
          validation='address required'
        />
        <br />
        <div className='col-12'>
          <MDBBtn style={{ marginRight: '10px' }} color='primary' type='submit'>
            {editMode ? 'Update' : 'Add'}
          </MDBBtn>
          <MDBBtn
            onClick={() => history.push('/')}
            color='danger'
            type='submit'
          >
            Go Back
          </MDBBtn>
        </div>
      </div>
    </MDBValidation>
  );
};

export default AddEditUser;
