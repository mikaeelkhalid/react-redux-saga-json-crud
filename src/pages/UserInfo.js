import React from 'react';
import { useHistory, useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { MDBBtn } from 'mdb-react-ui-kit';

const UserInfo = () => {
  const history = useHistory();
  const { id } = useParams();
  const { users } = useSelector((state) => state.users);
  const user = users.find((user) => user.id === Number(id));

  return (
    <div
      style={{
        marginTop: '100px',
        marginBottom: '20px',
      }}
    >
      <div
        className='row'
        style={{
          margin: 'auto',
          padding: '20px',
          maxWidth: '450px',
          alignContent: 'center',
        }}
      >
        <p className='fs-2 fw-bold'>User Details</p>
        <hr />
        <p className='col-md-6 fw-bold'>ID: </p>
        <p className='col-md-6'>{user.id}</p>
        <p className='col-md-6 fw-bold'>Name: </p>
        <p className='col-md-6'>{user.name}</p>
        <p className='col-md-6 fw-bold'>Phone: </p>
        <p className='col-md-6'>{user.phone}</p>
        <p className='col-md-6 fw-bold'>Email: </p>
        <p className='col-md-6'>{user.email}</p>
        <p className='col-md-6 fw-bold'>Address: </p>
        <p className='col-md-6'>{user.address}</p>
      </div>
      <MDBBtn onClick={() => history.push('/')} color='danger' type='submit'>
        Go Back
      </MDBBtn>
    </div>
  );
};

export default UserInfo;
