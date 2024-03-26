import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Formulario = () => {
    return (
        <>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    
                    <Form.Control type="text" placeholder="Nombre" />
                    <Form.Text className="text-muted"></Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="tuemail@ejemplo.com" />
                    <Form.Text className="text-muted"></Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Contraseña" />
                </Form.Group> 

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Confirma tu contraseña" />
                </Form.Group>
        
                <Button className='buttonStyle' variant="success" type="submit">
                    Registrarse
                </Button>
            </Form>
        </>
    )
}

export default Formulario