import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Tab } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useParams } from 'react-router-dom';
import "../App.css";

//get all items that are pending status and list them on a table

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


    return(
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>Username</th>
                    <th>Item Name</th>
                    <th>Description</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {items.map((item) => (
                    <tr>
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