import React from 'react';
import ReactStarts from 'react-rating-stars-component';

import { Card, Info, Title, Address, Image } from './styles';

import restaurante from '../../assets/restaurante-fake.png';

const RestaurantCard = () => (
  <Card>
    <Info>
      <Title>Nome do Restaurante</Title>
      <ReactStarts count={5} isHalf activeColor="#e7711c" edit={false} value={4} />
      <Address>Rua Rio de Janeiro, 120</Address>
    </Info>
    <Image src={restaurante} alt="Foto do Restaurante" />
  </Card>
);

export default RestaurantCard;
