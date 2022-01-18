import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { useParams } from 'react-router-dom';
import "../App.css";

//create a table that will display the employee's Item Reimbursement history using bootstrap table

export default function EmployeeHistTbl(props) {

    const {username} = props;   
    const [employeeHist, setEmployeeHist] = useState([]);


    useEffect(()=>{
        // IIFE Immediately Invoked Function Expression
        (async ()=>{
            const response = await fetch(`http://localhost:5000/items/${username}`)
            const employeeHist = await response.json();
            setEmployeeHist(employeeHist)
        })()
    },[employeeHist])

    const tableRows = () => {
        return employeeHist.map(item => {
            return (
                <tr>
                    <td>{item.username}</td>
                    <td>{item.itemName}</td>
                    <td>{item.itemPrice}</td>
                    <td>{item.status}</td>
                </tr>
            )
        })
    }
    
return(
<Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>Username</th>
      <th>Item Name</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    {tableRows} 
  </tbody>
</Table>
)
}