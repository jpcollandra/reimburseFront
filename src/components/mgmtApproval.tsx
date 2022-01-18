import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useRef} from 'react';
import "../App.css";

// get item by id and approve or deny them

export default function mgmtApproval() {
    
    return(
        <>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="form" placeholder="username to approve or deny" />
                </Form.Group>
            </Form>
        </>
    )
}