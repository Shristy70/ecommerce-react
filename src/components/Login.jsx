import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [uid, setUid] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();
  const handlelSubmit = (e) => {
    e.preventDefault();
    let api = `http://localhost:3000/Item/?userid = ${uid}`;
    axios.get(api).then((res) => {
      if (res.data.length>= 1) {
        if (res.data[0].password == pass) {
          window.localStorage.setItem("user", res.data[0].name);
          navigate("/loginyes");
        } else {
          alert("Invalid Password");
        }
      } else {
        alert("User id not  Found");
      }
    })
  }
  return (
    <>
      <h1>User Login</h1>
      <Form style={{ width: "500px" }}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter userid</Form.Label>
          <Form.Control
            type="text"
            value={uid}
            onChange={(e) => {
              setUid(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter Password</Form.Label>
          <Form.Control
            type="password"
            value={pass}
            onChange={(e) => {
              setPass(e.target.value);
            }}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handlelSubmit}>
          Submit
        </Button>
      </Form>
    </>
  );
};
export default Login;
