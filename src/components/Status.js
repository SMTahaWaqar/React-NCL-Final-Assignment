import axios from 'axios';
import React, { useState } from 'react'
import { Container } from 'react-bootstrap';

const Status = () => {

    const [info, setInfo] = useState({
      name : "",
      status: ""
    })

    const [statusSuccess, setStatusSuccess] = useState(false);

    const [show, setShow] = useState();

    const handleChange = (e) => {
      const {name, value} = e.target;
      setInfo({...info, [name]:value});
      // console.log(formValue);
    }

    const handleSubmit =async (e) => {
      e.preventDefault();
      console.log(info);
      axios.post("http://localhost:8080/status", info)
      .then(res => {
        console.log(res.data)
        setStatusSuccess(true)
        setShow(res.data)
      })
      .catch(err => console.error(err));
      }

  return (
    <Container fluid className="my-4">
      <h1 className="text-center">Status Of The Course</h1>
       <form onSubmit={handleSubmit} className="d-flex justify-content-center align-items-center my-5" style={{flexDirection: "column", border: '2px solid black'}}>
         <label htmlFor="name" className="my-4">
           <h4>Name</h4>
           <input
            style={{display: 'block'}}
            type="text"
            name="name"
            value={info.name}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="status" className="my-4">
          <h4>Status</h4>
          <input
           style={{display: 'block'}}
            type="text"
            name="status"
            value={info.status}
            onChange={handleChange}
          />
        </label>
        <button type="submit" className="btn btn-primary" style={{marginBottom: 40}}>Submit Status</button>
        {statusSuccess && <h3 className='text-center'>{show}</h3>}
      </form>
    </Container>

  );
}

export default Status;