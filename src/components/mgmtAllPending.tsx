import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Button, Tab } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useParams } from 'react-router-dom';
import "../App.css";

//get all items that are pending status and list them on a table
// will be able to approve or deny items

export default function MgmtAllPending() {

    const [items, setItems] = useState([]);

    async function fetchItems() {
        const response = await fetch(`http://localhost:3000/items/status/pending`)
        const items = await response.json();
        console.log(items);
        setItems(items)

    }

    useEffect(() => {
        fetchItems()
    },[]);

    const [status, setStatus] = useState('');

    async function approveItem(status) {
        const response = await fetch(`http://localhost:3000/items/${status}`)
        const item = await response.json();
        console.log(item);
        setStatus(item.status);
    }

    return(
        
        <Table striped bordered hover size="sm">
            <caption>All Pending Items</caption>
            <thead>
                <tr>
                    <th>Item ID</th>
                    <th>Username</th>
                    <th>Item Name</th>
                    <th>Description</th>
                    <th>Status</th>
                    <th>Approve or Deny</th>
                </tr>
            </thead>
            <tbody>
                {items.map((item) => (
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.username}</td>
                        <td>{item.itemName}</td>
                        <td>{item.itemDescription}</td>
                        <td>{item.status}</td>
                        <td>
                            <Button variant="primary" type="submit">Approve</Button>
                            <Button variant="secondary" type="submit">Deny</Button>
                        </td>
                       

                    </tr>
                ))}
            </tbody>
        </Table>
       )

}