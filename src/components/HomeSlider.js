// HomeSlider.js
import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const styles = {
  slide: {
    minHeight: 100,
    color: '#fff',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '70vh', // Ensure the slide takes the full height
    width: '100%', // Ensure the slide takes the full width
  },
  sliderContainer: {
    height: '70vh', // Set the height of the slider container
    width: '100%', // Ensure the slider container takes the full width
  },
};

const HomeSlider = ({ images }) => (
  <div style={styles.sliderContainer}>
    <AutoPlaySwipeableViews style={{ height: '100%' }}>
      {images.map((imageUrl, index) => (
        <div key={index} style={{ ...styles.slide, backgroundImage: `url(${imageUrl})` }}>
          {/* You can add slide content here if needed */}
        </div>
      ))}
    </AutoPlaySwipeableViews>
  </div>
);

export default HomeSlider;
