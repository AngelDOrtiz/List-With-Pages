import React from 'react';
import PropTypes from 'prop-types';

const Chapter = ({ title, chapter, cover_image }) => (
  <figure>
    <img src={cover_image} alt={title} />
    <figcaption>
      <h2>{title}</h2>
      <p>{chapter}</p>
    </figcaption>
  </figure>
);

Chapter.propTypes = {
  title: PropTypes.string.isRequired,
  chapter: PropTypes.string.isRequired,
  cover_image: PropTypes.string.isRequired,
};

export default Chapter;
