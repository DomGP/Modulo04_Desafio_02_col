import Alert from 'react-bootstrap/Alert';

const Alerta = ({colorAlert, textAlert}) => {
    return (
        <>
            <Alert variant={colorAlert}>{textAlert}</Alert>
        </>
    )
}

export default Alerta