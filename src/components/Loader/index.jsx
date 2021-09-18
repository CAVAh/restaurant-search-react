import React from 'react';
import Lottie from 'react-lottie';

// import animationData2 from '../../assets/restaurants-loading.json';
import animationData from '../../assets/restaurant-locations.json';

export default () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return <Lottie options={defaultOptions} />;
};
