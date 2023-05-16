import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import auth from "../../firebase/firebase";

function Register() {
  const [error, setError] = useState({
    emailError: false,
    passwordError: false,
  });

  const [success, setSuccess] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    setSuccess(false);

    var validEmailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var validPassRegex =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

    if (validEmailRegex.test(email)) {
      setError({
        ...error,
        emailError: false,
      });
    } else {
      setError({
        ...error,
        emailError: "Please enter your valid email.",
      });
      return false;
    }

    if (password.length <= 5) {
      setError({
        ...error,
        passwordError: "Password must be at least 6 character",
      });
      return false;
    } else if (!validPassRegex.test(password)) {
      setError({
        ...error,
        passwordError: "Password must contain 0-9 & special character.",
      });
      return false;
    } else {
      setError({
        ...error,
        passwordError: false,
      });
    }

    console.log("All validation are done perfectly 😍");

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        sendEmailVerification(auth.currentUser).then((verificationResult) => {
          console.log(verificationResult);
          setSuccess(true);
        });
        e.target.reset();
      })
      .catch((firebaseError) => {
        if (
          firebaseError ===
          "FirebaseError: Firebase: Error (auth/email-already-in-use."
        ) {
          setError({
            ...error,
            emailError: "Email already exist",
          });
        }

        // document.getElementById("error").innerText = error;
      });

    console.log(error);
  };

  return (
    <div className="login-register-container register-component">
      <div id="error"></div>
      <Form onSubmit={handleRegister}>
        <h3 className="text-center mb-3">Register</h3>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            required
          />
        </Form.Group>
        {error.emailError && <p className="text-danger">{error.emailError}</p>}

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            required
          />
        </Form.Group>
        {error.passwordError && (
          <p className="text-danger">{error.passwordError}</p>
        )}

        <div className="text-center  mb-5">
          <Button variant="primary" type="submit">
            Register Now
          </Button>

          {success && (
            <p className="text-success mt-3 mb-0">
              Your registeration is complete. Please verify your mail.
            </p>
          )}
        </div>
      </Form>
      <p className="m-0 mt-2 small">
        Already have an account? Please <Link to="/login">Login Now</Link>
      </p>
      <p className="m-0 mt-2 small">
        Forget password? <Link to="/reset-password">Reset Password</Link>
      </p>
    </div>
  );
}

export default Register;
