import React, { useState } from 'react';

const EditPage = ({ employee, selectedEmployee, setEmployee, setIsEditing }) => {
  const id = selectedEmployee.id;

  const [name, setName] = useState(selectedEmployee.Name);
  const [dob, setDob] = useState(selectedEmployee.dob);
  const [salary, setSalary] = useState(selectedEmployee.Salary);

  const [joiningDate, setJoiningdate] = useState(selectedEmployee.joiningDate);
  const [relievingDate, setRelievingDate] = useState(selectedEmployee.relievingDate);
  const [contact, setContact] = useState(selectedEmployee.contact);
  const [status, setStatus] = useState(selectedEmployee.Status);

  const handleUpdate = (e) => {
    e.preventDefault();

    const employee = {
      id,
      name,
      dob,
      salary,
      joiningDate,
      relievingDate,
      contact,
      status,
    };
    for (let i = 0; i < employee.length; i++) {
      if (employee[i].id === id) {
        employee.splice(i, 1, employee);
        break;
      }
    }
    setEmployee(employee);
    setIsEditing(false);
  };

  return (
    <div className='small-container'>
      <form onSubmit={handleUpdate}>
        <h1>Edit Employee</h1>
        <label htmlFor='Name'>Full Name</label>
        <input type='text' id='Name' name='Name' value={name} onChange={(e) => setName(e.target.value)} />

        <label htmlFor='nuumber'>Date of Birth</label>
        <input type='Number' id='dob' name='dob' value={dob} onChange={(e) => setDob(e.target.value)} />

        <label htmlFor='salary'>Salary</label>
        <input type='Number' id='salary' name='salary' value={salary} onChange={(e) => setSalary(e.target.value)} />

        <label htmlFor='joiningDate'>Joining Date</label>
        <input
          type='Number'
          id='joiningDate'
          name='joiningDate'
          value={joiningDate}
          onChange={(e) => setJoiningdate(e.target.value)}
        />

        <label htmlFor='relievingDate'>Relieving Date</label>
        <input
          type='Number'
          id='relievingDate'
          name='relievingDate'
          value={relievingDate}
          onChange={(e) => setRelievingDate(e.target.value)}
        />

        <label htmlFor='contact'>Contact</label>
        <input type='Number' id='contact' name='contact' value={contact} onChange={(e) => setContact(e.target.value)} />

        <label htmlFor='Name'>Status</label>
        <input type='bool' id='status' name='status' value={status} onChange={(e) => setStatus(e.target.value)} />

        <div style={{ marginTop: '30px' }}>
          <input type='Submit' value='Update' />
          <input type='button' className='muted-button' value='cancel' onClick={() => setIsEditing(false)} />
        </div>
      </form>
    </div>
  );
};

export default EditPage;
