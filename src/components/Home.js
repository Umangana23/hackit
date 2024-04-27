// Home.js
import React from 'react';
import HomeSlider from './HomeSlider';
import VisionDetails from './VisionDetails';

const Home = ({ images }) => {
  return (
    <div>
      <HomeSlider images={images} />
      <VisionDetails />
      {/* Other content for the home page */}
    </div>
  );
}

export default Home;
