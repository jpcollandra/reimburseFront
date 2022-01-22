import { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {v4} from 'uuid';

// This tsx component will allow employee to submit a reimbursement request
// Will be a form that the user fills out and sends to express backend

// Will use react-bootstrap to create a form

export default function ReimburseTicket(){
  
    const itemNameInput = useRef(null);
    const itemCostInput = useRef(null);
    const itemDescriptionInput = useRef(null);

    const [user, setUser] = useState({
      username:sessionStorage.getItem('username')
    })
  
    const username = user.username;

    async function submitReimbursement(){
          
          const reimbursementPayload = {
              id : v4(),
              itemName: itemNameInput.current.value,
              itemPrice: itemCostInput.current.value,
              itemQuantity: 1,
              itemDescription: itemDescriptionInput.current.value,
              status: "pending",
              username: username

          }
          console.log(reimbursementPayload);
          
          const response = await fetch('http://localhost:3000/items', {
            method:"POST", 
            headers:{
              'Content-Type':'application/json'
          },
          body:JSON.stringify(reimbursementPayload),
        });
        
        console.log(response);

          if(response.status === 200){
            alert("Item Successfully Submitted!")
        }else{
            alert("Something went wrong!")
        }
    }

     return(
        <Form>
                    <h3>Reimbursement Ticket</h3>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Item Name</Form.Label>
          <Form.Control ref={itemNameInput} type="form" placeholder="Chick fil A Meal" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Item Cost</Form.Label>
          <Form.Control ref={itemCostInput} type="form" placeholder="2" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Item Description</Form.Label>
          <Form.Control ref={itemDescriptionInput} type="form" placeholder="Date: MM/DD/YYYY + Reason" />
        </Form.Group>

        <Button onClick={ submitReimbursement } variant="primary" type="submit">
          Submit
        </Button>
        
      </Form>
        
     )
}
