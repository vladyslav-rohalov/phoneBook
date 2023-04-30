import styled from '@emotion/styled';
import imageError from '../../images/404.jpg';

export const H1Styled = styled.h1`
  font-size: 3.5em;
  margin: 0 auto;
`;

export const PStyled = styled.p`
  font-size: 1em;
  margin: 0 auto;
`;

export const Error = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${imageError});
  background-size: contain;
`;
