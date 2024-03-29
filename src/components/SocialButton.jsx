import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

const SocialButton = ({ button }) => {
  return (
    <>
      <Button variant='outline-dark rounded-circle p-3 m-1'>
        <i className={`fa-brands ${button} fa-xl`}></i>
      </Button>
    </>
  );
};

SocialButton.propTypes = {
  button: PropTypes.string.isRequired,
};

export default SocialButton;
