import React, { useEffect } from "react";
import { useRef, useState } from "react";
import { Button, Form, InputGroup, FormControl } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { v4 } from "uuid";

// This tsx component will allow employee to submit a reimbursement request
// Will be a form that the user fills out and sends to express backend

// Will use react-bootstrap to create a form

export default function ReimburseTicket() {
  const itemNameInput = useRef(null);
  const itemCostInput = useRef(null);
  const itemDescriptionInput = useRef(null);

  const [user, setUser] = useState({
    username: sessionStorage.getItem("username"),
  });

  const [startDate, setStartDate] = useState(new Date());

  const username = user.username;


  async function submitReimbursement() {
    const reimbursementPayload = {
      id: v4(),
      itemName: itemNameInput.current.value,
      itemPrice: itemCostInput.current.value,
      itemQuantity: 1,
      itemDescription: itemDescriptionInput.current.value,
      status: "pending",
      username: username,
    };
    console.log(reimbursementPayload);

    const response = await fetch("https://onewalmart.azurewebsites.net/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reimbursementPayload),
    });

    window.location.reload();

    if (response.status === 200) {
      alert("Item Successfully Submitted!");
    } else {
      alert("Something went wrong!");
    }
  }


  return (
    <>
    
    <Form>
      <h3>Reimbursement Ticket</h3>
      <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">Item Name</InputGroup.Text>
        <FormControl
          ref={itemNameInput}
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          placeholder="Chick fil a"
        />
      </InputGroup>

      <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">Cost($)</InputGroup.Text>
        <FormControl
          ref={itemCostInput}
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          placeholder="0.00"
        />
      </InputGroup>


      <InputGroup size="sm" className="mb-3">
        <Form.Control
          type= "date"
          ref={itemDescriptionInput}
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          placeholder="MM/DD/YYYY"
        />
      </InputGroup>

      <Button onClick={submitReimbursement} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </>
  );
}
