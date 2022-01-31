import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import "../App.css";

//create a table that will display the employee's Item Reimbursement history using bootstrap table

export default function EmployeeHistTbl() {
  const [user, setUser] = useState({
    username: sessionStorage.getItem("username"),
  });

  const username = user.username;

  const [employeeHist, setEmployeeHist] = useState([]);

  async function fetchEmployeeLog() {
    const response = await fetch(
      `https://onewalmart.azurewebsites.net/items/username/${username}`
    );
    const employeeLog = await response.json();
    console.log(employeeLog);
    setEmployeeHist(employeeLog);
  }

  useEffect(() => {
    fetchEmployeeLog();
  }, []);

  return (
    <>
    <h1>Reimbursement Page</h1>
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Item ID</th>
          <th>Username</th>
          <th>Cost($)</th>
          <th>Item Name</th>
          <th>Date</th>
          <th>Status</th>
          <th>Comments</th>
        </tr>
      </thead>
      <tbody>
        {employeeHist.map((item) => (
          <tr>
            <td>{item.id}</td>
            <td>{item.username}</td>
            <td>{item.itemPrice}</td>
            <td>{item.itemName}</td>
            <td>{item.itemDescription}</td>
            <td>{item.status}</td>
            <td>{item.comment}</td>
          </tr>
        ))}
      </tbody>
    </Table>
    </>
  );
}
