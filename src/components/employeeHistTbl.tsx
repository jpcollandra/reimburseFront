import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { useParams } from 'react-router-dom';
import "../App.css";

//create a table that will display the employee's Item Reimbursement history using bootstrap table

export default function EmployeeHistTbl() {

  const [user, setUser] = useState({
    username:sessionStorage.getItem('username')
  })

  const username = user.username;

  const [employeeHist, setEmployeeHist] = useState([]);


    async function fetchEmployeeLog() {
      const response = await fetch(`http://localhost:3000/items/username/${username}`)
      const employeeLog = await response.json();
      console.log(employeeLog);
      setEmployeeHist(employeeLog)

  }

  useEffect(() => {
    fetchEmployeeLog()
},[]);


    
return(
  <Table striped bordered hover size="sm">
  <thead>
      <tr>
          <th>Item ID</th>
          <th>Username</th>
          <th>Item Name</th>
          <th>Description</th>
          <th>Status</th>
      </tr>
  </thead>
  <tbody>
      {employeeHist.map((item) => (
          <tr>
              <td>{item.id}</td>
              <td>{item.username}</td>
              <td>{item.itemName}</td>
              <td>{item.itemDescription}</td>
              <td>{item.status}</td>
          </tr>
      ))}
  </tbody>
</Table>
)
}