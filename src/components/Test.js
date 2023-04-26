import React, { useState } from 'react';
import axios from 'axios';
import './Test.css';

const Test = () => {
      const [name, setName] = useState('');
      const [email, setEmail] = useState('');
      const [subject, setSubject] = useState('');
      const [message, setMessage] = useState('');
      const [alert, setAlert] = useState('');
    
      const handleSubmit = e => {
        e.preventDefault();
    
        const newContact = {
          name,
          email,
          subject,
          message
        };
    
        axios.post('/contact', newContact)
          .then(res => {
            setAlert(res.data);
            setName('');
            setEmail('');
            setSubject('');
            setMessage('');
          })
          .catch(err => console.log(err));
      };
    
      return (
        <div className="container">
          <h1>Contact Us</h1>
          {alert && <div className="alert">{alert}</div>}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" id="name" value={name} onChange={e => setName(e.target.value)} required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" id="email" value={email} onChange={e => setEmail(e.target.value)} required />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" className="form-control" id="subject" value={subject} onChange={e => setSubject(e.target.value)} required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea className="form-control" id="message" rows="5" value={message} onChange={e => setMessage(e.target.value)} required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      );
    }

export default Test