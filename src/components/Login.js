import axios from "axios";
import React, {useState } from "react";
import { Container } from "react-bootstrap";

const Login = (props) => {

    // const navigate = useNavigate();

    const [formValue, setFormValue] = useState({
      email : "",
      password: ""
    })

    const handleChange = (e) => {
      const {name, value} = e.target;
      setFormValue({...formValue, [name]:value});
      // console.log(formValue);
    }

    const handleSubmit =async (e) => {
      e.preventDefault();
      console.log(formValue);
      axios.post("http://localhost:8080/login", formValue)
      .then(res => {
        console.log(res.data.success)
        props.sendLoginData(res.data.success)
        // props.sendData(res.data.success)
      })
      .catch(err => console.error(err));
    }
    

  return (
    <Container fluid className="my-4">
      <h1 className="text-center">Login Account</h1>
       <form onSubmit={handleSubmit} className="d-flex justify-content-center align-items-center my-5" style={{flexDirection: "column"}}>
         <label htmlFor="email" className="my-4">
           <h4>Email</h4>
           <input
            style={{display: 'block'}}
            type="email"
            name="email"
            value={formValue.email}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="password" className="my-4">
          <h4>Password</h4>
          <input
           style={{display: 'block'}}
            type="password"
            name="password"
            value={formValue.password}
            onChange={handleChange}
          />
        </label>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </Container>
  );
  }
export default Login;