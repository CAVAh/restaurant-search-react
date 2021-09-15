import React, { useState } from 'react';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import Slider from 'react-slick';

import logo from '../../assets/logo.svg';
import restaurante from '../../assets/restaurante-fake.png';

import { Container, Logo, Search, Wrapper, Map, Carousel } from './styles';

const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
  };

  return (
    <Wrapper>
      <Container>
        <Search>
          <Logo src={logo} alt="Logo do Restaurante" />
          <TextField
            label="Pesquisar"
            outlined
            trailingIcon={<MaterialIcon role="button" icon="search" />}>
            <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
          </TextField>
          <Carousel>Em sua área</Carousel>
          <Slider {...settings}>
            <div>
              <img src={restaurante} alt="Imagem Restaurante" />
            </div>
            <div>
              <img src={restaurante} alt="Imagem Restaurante" />
            </div>
            <div>
              <img src={restaurante} alt="Imagem Restaurante" />
            </div>
            <div>
              <img src={restaurante} alt="Imagem Restaurante" />
            </div>
          </Slider>
        </Search>
      </Container>
      <Map />
    </Wrapper>
  );
};

export default Home;
