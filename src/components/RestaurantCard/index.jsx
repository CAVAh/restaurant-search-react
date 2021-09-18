import React, { useState } from 'react';
import ReactStarts from 'react-rating-stars-component';

import { Card, Info, Title, Address, Image } from './styles';

import restaurante from '../../assets/restaurante-fake.png';
import Skeleton from '../Skeleton';

const RestaurantCard = ({ restaurant, onClick }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Card onClick={onClick}>
      <Info>
        <Title>{restaurant.name}</Title>
        <ReactStarts
          count={5}
          isHalf
          activeColor="#e7711c"
          edit={false}
          value={restaurant.rating}
        />
        <Address>{restaurant.vicinity || restaurant.formatted_address}</Address>
      </Info>
      <Image
        imageLoaded={imageLoaded}
        src={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante}
        onLoad={() => setImageLoaded(true)}
        alt="Foto do Restaurante"
      />
      {!imageLoaded && <Skeleton height="100px" width="100px" />}
    </Card>
  );
};

export default RestaurantCard;
