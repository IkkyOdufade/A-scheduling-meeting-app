import React from 'react';
import Form from 'react-bootstrap/Form';
import customform from '../customform/customform.module.css';




export default function Customform() {
    return (
        <div className={customform.page}>
            <p>To:</p>
           <Form>
           <Form.Group >
    <Form.Label> </Form.Label>
    <Form.Control className={customform.to} type="text"/>
  </Form.Group>
  <Form.Group>
    <Form.Label className={customform.lab}>Subject </Form.Label>
    <Form.Control className={customform.subject} type="text"/>
  </Form.Group>
  <Form.Group  >
    <Form.Label>Location</Form.Label> 
    <Form.Control className={customform.location} type="text" />
  </Form.Group>
</Form> 
        </div>
    )
}
