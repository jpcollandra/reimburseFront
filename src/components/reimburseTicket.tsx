import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

// This tsx component will allow employee to submit a reimbursement request
// Will be a form that the user fills out and sends to express backend

// Will use react-bootstrap to create a form

export default function ReimburseTicket(){
     return(
        <Form>
                    <h3>Reimbursement Ticket</h3>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Item Name</Form.Label>
          <Form.Control type="form" placeholder="Chick fil A Meal" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Item Quantity</Form.Label>
          <Form.Control type="form" placeholder="2" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Item Description</Form.Label>
          <Form.Control type="form" placeholder="Date: MM/DD/YYYY + Reason" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
        
      </Form>
        
     )
}
