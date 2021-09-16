import React, { useState } from 'react';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import logo from '../../assets/logo.svg';
import restaurante from '../../assets/restaurante-fake.png';

import { Container, Carousel, Logo, Search, Wrapper, CarouselTitle } from './styles';
import { ImageCard, RestaurantCard, Modal, Map } from '../../components';

const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const settings = {
    arrows: false,
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
          <CarouselTitle>Em sua área</CarouselTitle>
          <Carousel {...settings}>
            <ImageCard photo={restaurante} title="nome" />
            <ImageCard photo={restaurante} title="nome" />
            <ImageCard photo={restaurante} title="nome" />
            <ImageCard photo={restaurante} title="nome" />
            <ImageCard photo={restaurante} title="nome" />
            <ImageCard photo={restaurante} title="nome" />
            <ImageCard photo={restaurante} title="nome" />
          </Carousel>
        </Search>
        <RestaurantCard />
      </Container>
      <Map />
      <Modal open={modalOpen} onClose={() => setModalOpen(!modalOpen)} />
    </Wrapper>
  );
};

export default Home;
