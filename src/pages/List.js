import React from 'react';
import '../global.css';
const List = ({ employee, handleEdit, handleDelete }) => {
  return (
    <div className='list-header'>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>DOB</th>
            <th>Salary</th>
            <th>Joining Date</th>
            <th>Relieving Date</th>
            <th> Contact</th>
            <th colSpan={2} className='text-center'>
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {employee.length > 0 ? (
            employee.map((employee, i) => (
              <tr key={employee.id}>
                <td>{i + 1}</td>
                <td>{employee.name}</td>
                <td>{employee.dob}</td>
                <td>{employee.Salary}</td>
                <td>{employee.joiningDate}</td>
                <td>{employee.relievingDate}</td>
                <td>{employee.contact}</td>
                <td>{employee.status}</td>
                <td>
                  <button onClick={() => handleEdit(employee.id)}>Edit</button>
                  <button onClick={() => handleDelete(employee.id)}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr colSpan={7}>No Employee</tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default List;
