import PropTypes from "prop-types";

const Subtitle = ({ subtitleText }) => {
  return (
    <>
      <h6>{subtitleText}</h6>
    </>
  );
};

Subtitle.propTypes = {
  subtitleText: PropTypes.string.isRequired,
};

export default Subtitle;
