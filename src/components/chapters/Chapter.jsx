import React from 'react';
import PropTypes from 'prop-types';

const Chapter = ({ name, quote, image }) => (
  <figure>
    <img src={image} alt={name} />
    <figcaption>
      <h2>{name}</h2>
      <p>{quote}</p>
    </figcaption>
  </figure>
);

Chapter.propTypes = {
  name: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Chapter;
