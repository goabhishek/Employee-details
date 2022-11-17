import React from 'react';
import { useState } from 'react';
import AddPage from './AddPage';
import EditPage from './EditPage';
import Header from './Header';
import List from './List';
import '../global.css';
import Swal from 'sweetalert2';
import employeesData from '../empdata/employeesData';

const Data = () => {
  //   const [employee, setEmployee] = useState();
  const [employee, setEmployee] = useState(employeesData);

  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = (id) => {
    // ..
    // eslint-disable-next-line no-use-before-define
    const [employee] = employee.filter((employee) => employee.id === id);

    setSelectedEmployee(employee);
    setIsEditing(true);
  };
  const handleDelete = (id) => {
    Swal.fire({
      icon: 'warning',
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
    }).then((result) => {
      if (result.value) {
        // eslint-disable-next-line no-use-before-define
        const [employee] = employee.filter((employee) => employee.id === id);

        Swal.fire({
          icon: 'success',
          title: 'Deleted!',
          text: `${employee.name} ${employee.contact}'s data has been deleted.`,
          showConfirmButton: false,
          timer: 1500,
        });

        setEmployee(employee.filter((employee) => employee.id !== id));
      }
    });
  };

  return (
    <div>
      <h1>Employee Management system</h1>
      {!isAdding && !isEditing && (
        <>
          <Header setIsAdding={setIsAdding} />
          <List employee={employee} handleEdit={handleEdit} handleDelete={handleDelete} />
        </>
      )}
      {isAdding && <AddPage employee={employee} setEmployee={setEmployee} setIsAdding={setIsAdding} />}
      {isEditing && (
        <EditPage
          employee={employee}
          selectedEmployee={selectedEmployee}
          setEmployee={setEmployee}
          setIsEditing={setIsEditing}
        />
      )}
    </div>
  );
};

export default Data;
