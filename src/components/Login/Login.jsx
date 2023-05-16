import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login-register-container login-component">
      <Form>
        <h3 className="text-center mb-3">Login</h3>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We will never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
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
