/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
import React, { useState, useRef, useEffect } from 'react';
import Swal from 'sweetalert2';
import '../global.css';
const AddPage = ({ employee, setEmployee, setIsAdding }) => {
  const [loginUser, setLoginUser] = useState({
    name: '',
    dob: '',
    Salary: '',
    joiningDate: '',
    relievingDate: '',
    contact: '',
    Status: '',
  });

  const textInput = useRef(null);

  useEffect(() => {
    textInput.current.focus();
  }, []);

  const handleAdd = (e) => {
    e.preventDefault();
    if (!name || !dob || !Salary || joiningDate || relievingDate || contact || Status) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields are required.',
        showConfirmButton: true,
      });
    }

    const id = employee.length + 1;
    const newEmployee = {
      id,
      name,
      dob,
      Salary,
      joiningDate,
      relievingDate,
      contact,
      Status,
    };
    employee.push(newEmployee);
    setEmployee(employee);
    setIsAdding(false);
    Swal.fire({
      icon: 'success',
      title: 'Added!',
      text: `${firstName} ${lastName}'s data has been Added.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div>
      <form onSubmit={handleAdd} className='form-main'>
        {/* <h1>Add Employee</h1> */}
        <label htmlFor='Name'>Full Name</label>
        <input
          type='text'
          id='name'
          ref={textInput}
          value={loginUser.name}
          onChange={(e) => setLoginUser(e.target.value)}
        />

        <label htmlFor='dob'>Date Of Birth</label>
        <input type='number' id='dob' value={loginUser.dob} onChange={(e) => setLoginUser(e.target.value)} />

        <label htmlFor='Salary'>Salary</label>
        <input type='number' id='Salary' value={loginUser.Salary} onChange={(e) => setLoginUser(e.target.value)} />

        <label htmlFor='joiningDate'>Joining Date</label>
        <input
          type='number'
          id='joiningDate'
          value={loginUser.joiningDate}
          onChange={(e) => setLoginUser(e.target.value)}
        />

        <label htmlFor='relievingDate'>Relieving Date</label>
        <input
          type='number'
          id='relievingDate'
          value={loginUser.relievingDate}
          onChange={(e) => setLoginUser(e.target.value)}
        />

        <label htmlFor='contact'>Contact</label>
        <input type='contect' id='contact' value={loginUser.contact} onChange={(e) => setLoginUser(e.target.value)} />

        <label htmlFor='status'> Status</label>
        <input type='text' id='status' value={loginUser.Status} onChange={(e) => setLoginUser(e.target.value)} />

        <div>
          <input type='submit' value='Add' />
          <input type='button' value='Cancel' onClick={() => setIsAdding(false)} />
        </div>
      </form>
    </div>
  );
};

export default AddPage;
