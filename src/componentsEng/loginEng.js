import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./comps.css";
import { Container } from "react-bootstrap";

function LoginEng() {
  // Estado inicial del Forms
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  // Estado inicial de validaciones
  const [validationStates, setValidationStates] = useState({
    passwordState: false, // Estado Inicial falso porque no cumple
  });

  // Se cambia el estado del email sin comprobar antes en este caso
  // La comprobación para email se deja solo al confirmar
  const handleEmailChange = (e) => {
    setFormValues({ ...formValues, email: e.target.value });
  };

  // Se cambia el estado newPassword, pero invoca validatePassword porque
  // Queremos hacer la comprobación cada cambio de la contra
  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setFormValues({ ...formValues, password: newPassword });
    validatePassword(newPassword);
  };

  // Longitud entre 6 y 8
  const validatePassword = (password) => {
    const passwordLength = password.length >= 6 && password.length <= 8;
    setValidationStates({
      ...validationStates,
      passwordState: passwordLength,
    });
  };

  //Al presionar submit del forms
  const clickSubmit = () => {
    // Si cumple con requisitos, avisar por una alerta
    if (validationStates.passwordState) {
      alert(JSON.stringify(formValues));
    } else {
      alert("mijo lea las instrucciones");
    }
  };

  return (
    <Container>
      <Row>
        <Col style={{ backgroundColor: "beige" }}>
          <h1>Too good to go!</h1>
          <img
            src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="img1"
            alt="logo"
          />
        </Col>
        <Col style={{ backgroundColor: "#3260a8" }}>
          <Card className="mb-3 login-card">
            <Card.Body>
              <Form>
                {/* Grupo de Form del correo del usuario */}
                <Form.Group className="mb-6" controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    placeholder="Username"
                    onChange={handleEmailChange}
                    value={formValues.email}
                  />
                </Form.Group>

                {/* Grupo de Form de la contra del usuario */}
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    onChange={handlePasswordChange}
                    value={formValues.password}
                  />
                  <p>forgot Password?</p>
                  {!validationStates.passwordState && (
                    <Form.Text className="text-muted text-login">
                      Your password should be between 6 and 8 chars long
                    </Form.Text>
                  )}
                </Form.Group>
                <Button variant="primary" onClick={clickSubmit}>
                  login
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginEng;
