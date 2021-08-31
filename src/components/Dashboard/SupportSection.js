import React, { useState } from 'react';
import { Button } from '../Button';
import axios from 'axios';
import './SupportSection.css';

function SupportSection() {
  const [_id, setID] = useState('');
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');

  let handleIDChange = (event) => {
    setID(event.target.value);
  };

  let handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  let handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const clearState = () => {
    setID('');
    setSubject('');
    setDescription('');
  };

  let handleSubmit = (event) => {
    event.preventDefault();

    const ticket = {
      _id: subject,
      subject: subject,
      description: description,
    };

    // console.log(ticket);

    axios.post('http://localhost:5000/tickets/add', ticket).then((res) => {
      console.log(res.data);
      alert(`Ticket created.`);
      clearState();
    });
  };

  // const Ticket = (props) => {
  //   return (
  //     <ul className="ticket_box">
  //       <li className="ticket_item">
  //         {props.subject}
  //         {props.description}
  //       </li>
  //     </ul>
  //   );
  // };

  // axios
  //   .get('http://localhost:5000/tickets')
  //   .then((res) => {
  //     console.log(res.data);
  //     console.log(res.data.subject);
  //     console.log(res.data.description);
  //   })
  //   .catch((err) => {
  //     console.log('No tickets to display!');
  //     console.log('Error: ' + err);
  //   });

  return (
    <div className="main_section">
      <h3 className="form_title">Existing tickets.</h3>
      <ul className="ticket_box">
        {/* test item from backend */}
        {/* <Ticket></Ticket> */}
        <li className="ticket_item">Ticket #1 - Device constantly reboots.</li>
        <li className="ticket_item">
          Ticket #2 - Device stream crashing, displays error.
        </li>
        <li className="ticket_item">Ticket #3 - Objects not detected.</li>
      </ul>
      <h3 className="form_title">Create a ticket.</h3>
      <form autoComplete="off" className="form" onSubmit={handleSubmit}>
        <div className="form_inputs">
          <div class="form_subtitle">
            <label htmlFor="subject" className="form_label">
              Subject
            </label>
          </div>
          <input
            required
            minLength="3"
            id="subject"
            type="text"
            name="subject"
            className="form_input"
            placeholder="Enter the subject of the ticket"
            value={subject}
            onChange={(handleIDChange, handleSubjectChange)}
          />
        </div>
        <div className="form_inputs">
          <div class="form_subtitle">
            <label htmlFor="description" className="form_label">
              Description
            </label>
          </div>
          <textarea
            required
            minLength="10"
            maxLength="200"
            id="description"
            type="text"
            name="description"
            className="form_input"
            placeholder="Enter a description of the issue (max 200 characters)"
            value={description}
            onChange={handleDescriptionChange}
          />
        </div>
        <div className="form_btn">
          <Button buttonSize="btn--wide" buttonColor="blue" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SupportSection;
