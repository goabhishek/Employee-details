import React from 'react';
import { useState } from 'react';
import AddPage from './AddPage';
import EditPage from './EditPage';
import Header from './Header';
import List from './List';
import '../global.css';
import employeesData from '../empdata/employeesData';

const Data = () => {
  //   const [employee, setEmployee] = useState();
  const [employee, setEmployee] = useState(employeesData);

  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = (id) => {
    // ..
    const [employee] = employee.filter((employee) => employee.id === id);
    setSelectedEmployee(employee);
    setIsEditing(true);
  };
  const handleDelete = (id) => {
    // ...
    console.log('deleteid', id);
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
