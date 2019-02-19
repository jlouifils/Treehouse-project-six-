import React from 'react';
import  ItemGallery from './ItemGallery';
import PropTypes from 'prop-types';

const Gallery = props => {


  const photos = prps.data.map(photo =>
  );

  return(
    <div className = "photo-container">
        <h2>{prop.title}</h2>
        <ul>
            {/*Photo Gallery*/}
            {photos}
        </ul>
    </div>
  );
};

Gallery.propTypes = {
  data: propTypes.arrayOf(PropTypes.object),
  title: PropTypes.strings
};

export default Gallery
