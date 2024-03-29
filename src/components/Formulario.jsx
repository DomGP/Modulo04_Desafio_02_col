import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alerta from "./Alerta";

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [show, setShow] = useState(false);
  const [alert, setAlert] = useState({ message: "", color: "" });

  const submit = (event) => {
    event.preventDefault();

    if (
      nombre.trim() === "" ||
      email.trim() === "" ||
      password.trim() === "" ||
      confirmPassword.trim() === ""
    ) {
      setShow(true);
      setAlert({
        message: "Debes llenar todos los campos requeridos",
        color: "danger",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setShow(true);
      setAlert({
        message: "El correo electrónico no tiene un formato válido",
        color: "danger",
      });
      return;
    }

    if (password !== confirmPassword) {
      setShow(true);
      setAlert({
        message: "Las contraseñas no coinciden",
        color: "danger",
      });
      return;
    }

    setNombre("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setShow(true);
    setAlert({ message: "Formulario enviado", color: "success" });
  };

  return (
    <>
      <Form onSubmit={submit}>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Control
            type='text'
            placeholder='Nombre'
            value={nombre}
            onChange={(event) => setNombre(event.target.value)}
          />
          <Form.Text className='text-muted'></Form.Text>
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Control
            type='email'
            placeholder='tuemail@ejemplo.com'
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <Form.Text className='text-muted'></Form.Text>
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Control
            type='password'
            placeholder='Contraseña'
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Control
            type='password'
            placeholder='Confirma tu contraseña'
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
        </Form.Group>

        <Button className='buttonStyle' variant='success' type='submit'>
          Registrarse
        </Button>
      </Form>
      {show && <Alerta message={alert.message} color={alert.color} />}
    </>
  );
};

export default Formulario;
