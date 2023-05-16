import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase/firebase";

function Login() {
  const [error, setError] = useState();

  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    var validEmailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    setError("");
    if (!validEmailRegex.test(email)) {
      setError("Email is invalide");
      return false;
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log(userCredential.user);
          navigate("/");
        })
        .catch((error) => {
          const errorCode = error.code;
          errorHandler(errorCode);
        });
    }
  };

  // error handler
  const errorHandler = (error) => {
    if (error === "auth/user-not-found") {
      setError("User not found");
    } else if (error === "auth/missing-password") {
      setError("Password is missing");
    } else if (error === "auth/wrong-password") {
      setError("Wrong password");
    } else {
      setError("Something is wrong. Please try again.");
    }
  };

  return (
    <div className="login-register-container login-component">
      <Form onSubmit={handleSignIn}>
        <h3 className="text-center mb-3">Login</h3>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
          />
          <Form.Text className="text-danger">{error}</Form.Text>
        </Form.Group>

        <div className="text-center mb-5">
          <Button variant="primary" type="submit">
            Login
          </Button>
        </div>
      </Form>
      <p className="m-0 mt-2 small">
        Dont have a account? Please <Link to="/register">Register Now</Link>
      </p>
      <p className="m-0 mt-2 small">
        Forget password? <Link to="/reset-password">Reset Password</Link>
      </p>
    </div>
  );
}

export default Login;
