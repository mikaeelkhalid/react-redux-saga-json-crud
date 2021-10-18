import React, { useState, useEffect } from 'react';
import { MDBValidation, MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import { useHistory } from 'react-router';

const initialState = {
  name: '',
  email: '',
  phone: '',
  address: '',
};

const AddEditUser = () => {
  const [user, setUser] = useState(initialState);
  const { name, email, phone, address } = user;

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
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
      <p className='fs-2 fw-bold'>Add user detail</p>
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
          value={name}
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
          value={email}
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
          value={phone}
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
          value={address}
          onChange={onInputChange}
          validation='address required'
        />
        <br />
        <div className='col-12'>
          <MDBBtn style={{ marginRight: '10px' }} color='primary' type='submit'>
            Add
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
