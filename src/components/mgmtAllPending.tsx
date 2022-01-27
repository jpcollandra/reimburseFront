import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useRef, useState } from "react";
import { Button, Tab } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useParams } from "react-router-dom";
import "../App.css";

//get all items that are pending status and list them on a table
// will be able to approve or deny items

export default function MgmtAllPending() {
  const [items, setItems] = useState([]);
  const [approval, setApproval] = useState([]);

  async function fetchItems() {
    const response = await fetch(`http://localhost:3000/items/status/pending`);
    const items = await response.json();
    console.log(items);
    setItems(items);
  }

  useEffect(() => {
    fetchItems();
  }, [approval]);


  async function approveItem(props) {
    //set id to the itemReimID ref
    const id = props;
    console.log(id);
    const response = await fetch(`http://localhost:3000/items/${id}/approve`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });
    const approval = await response.json();
    console.log(approval);
    setApproval(approval);
  }

  async function denyItem(props) {
    //set id to the itemReimID ref
    const id = props;
    console.log(id);
    const response = await fetch(`http://localhost:3000/items/${id}/deny`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });
    const denied = await response.json();
    console.log(denied);
    setApproval(denied);
  }

  return (
    <>
    <h1>All Pending Items</h1>
    <Table striped bordered hover size="sm">
      <caption>Awaiting Approval</caption>
      <thead>
        <tr>
          <th>Item ID</th>
          <th>Username</th>
          <th>Item Name</th>
          <th>Cost($)</th>
          <th>Date</th>
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
            <td>{item.itemPrice}</td>
            <td>{item.itemDescription}</td>
            <td>{item.status}</td>
            <td>
              <Button
                onClick={() => approveItem(item.id)}
                variant="primary"
                type="submit"
              >
                Approve
              </Button>
              <Button
                onClick={() => denyItem(item.id)}
                variant="secondary"
                type="submit"
              >
                Deny
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
    </>
  );
}
