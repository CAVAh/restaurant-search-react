// noinspection JSUnusedGlobalSymbols

import styled from 'styled-components';

export const Wrapper = styled.div({
  display: 'flex',
  flexDirection: 'row',
});

export const Container = styled.aside({
  backgroundColor: (props) => props.theme.colors.background,
  width: '360px',
  height: '100vh',
  overflowY: 'auto',
});

export const Search = styled.section({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  backgroundColor: '#FFFFFF',
  padding: '16px',
});

export const Logo = styled.img({
  margin: '0 auto 15px',
  width: '50%',
});

export const Map = styled.div({
  backgroundColor: 'red',
  width: '500px',
});

export const Carousel = styled.h2({
  fontFamily: (props) => props.theme.fonts.regular,
  color: (props) => props.theme.colors.text,
  fontSize: '20px',
  fontWeight: 'bold',
  lineHeight: '30px',
  margin: '16px 0',
});