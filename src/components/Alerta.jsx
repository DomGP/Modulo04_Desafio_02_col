import PropTypes from "prop-types";

const Alerta = ({ message, color }) => {
  return (
    <div className={`alert alert-${color}`} role='alert' id="alerta">
      {message}
    </div>
  );
};

/* Alerta.propTypes = {
  message: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
}; */

export default Alerta;
