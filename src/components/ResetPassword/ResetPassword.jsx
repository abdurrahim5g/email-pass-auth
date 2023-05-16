import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import auth from "../../firebase/firebase";
import { useState } from "react";

function ResetPassword() {
  const [resetMailStatus, setResetMailStatus] = useState("");
  const [error, setError] = useState(false);

  const handleResetPassword = (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    setResetMailStatus();
    setError();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setResetMailStatus(
          "Reset mail send. Plase check you mail and reset password."
        );
      })
      .catch((error) => {
        setError(error.code);
      });
  };

  return (
    <div className="login-register-container reset-password-component">
      <Form onSubmit={handleResetPassword}>
        <h3 className="text-center mb-3">Reset Password</h3>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" />
          <Form.Text className="text-success">{resetMailStatus}</Form.Text>
          <br />
          <Form.Text className="text-danger">{error}</Form.Text>
        </Form.Group>

        <div className="text-center mb-5">
          <Button variant="primary" type="submit">
            Send reset link
          </Button>
        </div>
      </Form>

      <p className="m-0 mt-2 small">
        Dont have a account? Please <Link to="/register">Register Now</Link>
      </p>
      <p className="m-0 mt-2 small">
        Already have an account? Please <Link to="/login">Login Now</Link>
      </p>
    </div>
  );
}

export default ResetPassword;
