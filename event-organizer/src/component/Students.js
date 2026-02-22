import React from 'react'

export default function Students() {
  const students = [
    { id: 1, name: 'Himath', rollNo: '001', email: 'himath@sreenidhi.edu' },
    { id: 2, name: 'John Doe', rollNo: '002', email: 'john@sreenidhi.edu' },
    { id: 3, name: 'Jane Smith', rollNo: '003', email: 'jane@sreenidhi.edu' },
    { id: 4, name: 'Raj Kumar', rollNo: '004', email: 'raj@sreenidhi.edu' },
    { id: 5, name: 'Priya Sharma', rollNo: '005', email: 'priya@sreenidhi.edu' }
  ];

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Students List</h2>
      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead className="table-warning">
            <tr>
              <th>Roll No</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.rollNo}</td>
                <td>{student.name}</td>
                <td>{student.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
