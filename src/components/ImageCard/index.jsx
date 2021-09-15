import React from 'react';

import { Card } from './styles';

const ImageCard = ({ photo, title }) => (
  <Card photo={photo}>
    <span>{title}</span>
  </Card>
);

export default ImageCard;
