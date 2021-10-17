import React from 'react';
import {
  MDBBtn,
  MDBIcon,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
  MDBTooltip,
} from 'mdb-react-ui-kit';

import { Link } from 'react-router-dom';

const DataTable = ({ users, handleDelete }) => {
  return (
    <div className='container' style={{ marginTop: '150px' }}>
      <MDBTable>
        <MDBTableHead dark>
          <tr>
            <th scope='col'>No.</th>
            <th scope='col'>Name</th>
            <th scope='col'>Email</th>
            <th scope='col'>Phone</th>
            <th scope='col'>Address</th>
            <th scope='col'>Action</th>
          </tr>
        </MDBTableHead>
        {users &&
          users.map((user, index) => (
            <MDBTableBody key={index}>
              <tr>
                <th scope='row'>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.address}</td>
                <td>
                  <MDBBtn
                    className='m-1'
                    tag='a'
                    color='none'
                    onClick={() => handleDelete(user.id)}
                  >
                    <MDBTooltip title='Delete' tag='a'>
                      <MDBIcon
                        fas
                        icon='trash-alt'
                        style={{ color: 'red', marginRight: '10px' }}
                        size='md'
                      ></MDBIcon>
                    </MDBTooltip>
                  </MDBBtn>
                  <Link to={`/add-edit/${user.id}`}>
                    <MDBTooltip title='Edit' tag='a'>
                      <MDBIcon
                        fas
                        icon='pen'
                        style={{
                          color: 'blue',
                          marginBottom: '10px',
                          marginRight: '10px',
                        }}
                        size='md'
                      ></MDBIcon>
                    </MDBTooltip>
                  </Link>
                  <Link to={`/user-info/${user.id}`}>
                    <MDBTooltip title='View' tag='a'>
                      <MDBIcon
                        fas
                        icon='eye'
                        style={{ color: 'green', marginBottom: '10px' }}
                        size='md'
                      ></MDBIcon>
                    </MDBTooltip>
                  </Link>
                </td>
              </tr>
            </MDBTableBody>
          ))}
      </MDBTable>
    </div>
  );
};

export default DataTable;
