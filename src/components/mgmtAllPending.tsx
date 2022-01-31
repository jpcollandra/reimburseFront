import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useRef, useState } from "react";
import { Button, Tab } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useParams } from "react-router-dom";
import "../App.css";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
//get all items that are pending status and list them on a table
// will be able to approve or deny items

export default function MgmtAllPending() {
  const [items, setItems] = useState([]);
  const [approval, setApproval] = useState([]);

  async function fetchItems() {
    const response = await fetch(`https://onewalmart.azurewebsites.net/items/status/pending`);
    const items = await response.json();
    setItems(items);
  }

  useEffect(() => {
    fetchItems();
  }, [approval]);


  async function approveItem(props) {
    //set id to the itemReimID ref
    const id = props;
    console.log(id);
    const response = await fetch(`https://onewalmart.azurewebsites.net/items/${id}/approve`, {
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

  async function denyItem(id2) {
    //set id to the itemReimID ref
    const id = id2;
    console.log(id);
    const response = await fetch(`https://onewalmart.azurewebsites.net/items/${id}/deny`, {
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

  async function denyItem2(id3) {
    //set id to the itemReimID ref
    const id = id3;
    console.log(id);
    const response = await fetch(`https://onewalmart.azurewebsites.net/items/${id}/deny`, {
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

  async function denyItem3(id4) {
    //set id to the itemReimID ref
    const id = id4;
    console.log(id);
    const response = await fetch(`https://onewalmart.azurewebsites.net/items/${id}/deny`, {
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

  async function seeMGMT(id2){
    const id = id2;
    console.log(id);
    const response = await fetch(`https://onewalmart.azurewebsites.net/items/${id}/seeMGMT`, {
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

  function seeMGMT2(props){
    const id2 = props;
    denyItem(id2);
    seeMGMT(id2);
    
  }

  async function inApp(id3){
    const id = id3;
    console.log(id);
    const response = await fetch(`https://onewalmart.azurewebsites.net/items/${id}/inApp`, {
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

  function inApp2(props){
    const id3 = props;
    denyItem2(id3);
    inApp(id3);
    
  }

  async function seeEmp(id4){
    const id = id4;
    console.log(id);
    const response = await fetch(`https://onewalmart.azurewebsites.net/items/${id}/seeEmp`, {
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

  function seeEmp2(props){
    const id4 = props;
    denyItem3(id4);
    seeEmp(id4);
  }

  function btnAlert(props){
    confirmAlert({
      title: 'Reason for denial',
      message: 'Select a reason',
      buttons: [
        {
          label: 'See Management',
          onClick: () => seeMGMT2(props)
        },
        {
          label: 'Inappropriate use of Funds',
          onClick: () => inApp2(props)
        },
        {
          label: 'See Employee Handbook',
          onClick: () => seeEmp2(props)
        }
      ]
    });
  };


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
                onClick={() => btnAlert(item.id)}
                variant="danger"
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
