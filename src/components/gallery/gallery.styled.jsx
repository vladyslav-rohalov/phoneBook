import styled from '@emotion/styled';
const backdrop = require('../elements/backdropContainer/backdrop.webp');

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: #ffffff;
  width: 300px;
  height: 97%;
  border-top-left-radius: 1.25em;
  border-top-right-radius: 1.25em;
  background-image: url(${backdrop});
  background-size: cover;
  z-index: 4;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 0em;
    height: 0em;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
`;

export const Gallery = styled.ul`
  display: flex;
  list-style: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 0;
`;

export const GalleryItem = styled.li``;

export const GalleryImage = styled.img``;
