import styled from '@emotion/styled';

const backdrop = require('../../../images/backdrop.webp');

export const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  left: 0;
  background-color: black;
  height: 100%;
  width: 100%;
  border-radius: 1.125em;
  background-image: url(${backdrop});
  background-size: cover;
  overflow-y: auto;
  box-shadow: 0px 2px 6px 4px rgba(121, 128, 133, 0.3) inset;
  &::-webkit-scrollbar {
    width: 0px;
    height: 0px;
  }
`;
