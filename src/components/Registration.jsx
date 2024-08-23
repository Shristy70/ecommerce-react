import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
const Registration = () => {
  const [input, setInput] = useState({});
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput((values) => ({ ...values, [name]: value }));
    console.log(input);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let api = "http://localhost:3000/Item";
    axios.get(api).then((res) => {
      toast.success("your are successfully registered!!");
      setInput({
        name: "",
        userid: "",
        email: "",
        password: "",
      });
    });
  };
  return (
    <>
      <h1>User Registration </h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter name: </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            value={input.name}
            onChange={handleInput}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Enter userid</Form.Label>
          <Form.Control
            type="text"
            placeholder="enter id"
            value={input.userid}
            onChange={handleInput}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Enter Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="enter email"
            value={input.email}
            onChange={handleInput}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Enter password</Form.Label>
          <Form.Control
            type="password"
            placeholder="enter password"
            value={input.password}
            onChange={handleInput}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
      <ToastContainer />
    </>
  );
};

export default Registration;
