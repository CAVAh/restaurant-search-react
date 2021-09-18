import React, { useState } from 'react';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import { useSelector } from 'react-redux';
import logo from '../../assets/logo.svg';
import restaurante from '../../assets/restaurante-fake.png';

import {
  Container,
  Carousel,
  Logo,
  Search,
  Wrapper,
  CarouselTitle,
  ModalTitle,
  ModalInfo,
} from './styles';
import { ImageCard, RestaurantCard, Modal, Map, Loader, Skeleton } from '../../components';

const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [query, setQuery] = useState(null);
  const [placeId, setPlaceId] = useState(null);
  const { restaurants, restaurantSelected } = useSelector((state) => state.restaurants);
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
  };

  const handleKeyPress = (e) => {
    if (e.which === 13) {
      setQuery(inputValue);
    }
  };

  const handleOpenModal = (placeId) => {
    setPlaceId(placeId);
    setModalOpen(true);
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
            <Input
              value={inputValue}
              onKeyPress={handleKeyPress}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </TextField>
          {restaurants.length > 0 ? (
            <>
              <CarouselTitle>Em sua área</CarouselTitle>
              <Carousel {...settings}>
                {restaurants.map((restaurant) => (
                  <ImageCard
                    key={restaurant.place_id}
                    photo={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante}
                    title={restaurant.name}
                  />
                ))}
              </Carousel>
            </>
          ) : (
            <Loader />
          )}
        </Search>
        {restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.place_id}
            onClick={() => handleOpenModal(restaurant.place_id)}
            restaurant={restaurant}
          />
        ))}
      </Container>
      <Map query={query} placeId={placeId} />
      <Modal open={modalOpen} onClose={() => setModalOpen(!modalOpen)}>
        {restaurantSelected ? (
          <>
            <ModalTitle>{restaurantSelected?.name}</ModalTitle>
            <ModalInfo>{restaurantSelected?.formatted_phone_number}</ModalInfo>
            <ModalInfo>{restaurantSelected?.formatted_address}</ModalInfo>
            <ModalInfo>
              {restaurantSelected?.opening_hours?.isOpen() ? 'Aberto' : 'Fechado'}
            </ModalInfo>
          </>
        ) : (
          <>
            <Skeleton width="20px" height="16px" />
            <Skeleton width="10px" height="10px" />
            <Skeleton width="10px" height="10px" />
            <Skeleton width="10px" height="10px" />
          </>
        )}
      </Modal>
    </Wrapper>
  );
};

export default Home;
