import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// Import a helper function that will check if the email is valid
import {validateEmail } from '../../utils/helpers';




export default function Contact (){
  // useState for email, name, message and errorMessage
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;
    
        // Based on the input type, we set the state of either email, name, and message
        if (inputType === 'email') {
          setEmail(inputValue);
        } else if (inputType === 'name') {
          setName(inputValue);
        } else {
          setMessage(inputValue);
        }
      };

      const handleFormSubmit = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();
    
        // First we check to see if the email is not valid or if the name or message are empty. If so we set an error message to be displayed on the page.
        if (!validateEmail(email) || !name || !message) {
          setErrorMessage('Email or name fields invalid, or empty message field');
        // We want to exit out of this code block if something is wrong so that the user can correct it
           return;
         }
        alert(`Hello ${name}, your message has been submitted to Vadim`);
    
        // If everything goes according to plan, we want to clear out the input after a successful registration.
        setName('');
        setMessage('');
        setEmail('');
        setErrorMessage('');
      };
    
//  Rendering the Contact Component
    return (
    <div className="container">
        <div className="row p-2">
            <div className="col-md-6">
            <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        value={name}
                        name="name"
                        onChange={handleInputChange} 
                        type="name"
                        placeholder="Enter Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        value={email}
                        name="email"
                        onChange={handleInputChange} 
                        type="email"
                        placeholder="Enter Email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Message</Form.Label>
                    <Form.Control 
                        value={message}
                        name="message"
                        onChange={handleInputChange}
                        as="textarea" 
                        rows={6} 
                        placeholder="Enter message here" />
                </Form.Group>
                <Button variant="dark" type="submit" onClick={handleFormSubmit}>
                    Submit
                </Button>
                </Form>
                {errorMessage && (
                    <div>
                    <p className="error-text">{errorMessage}</p>
                    </div>
               )}
            </div>
        </div>
    </div>
    )
}