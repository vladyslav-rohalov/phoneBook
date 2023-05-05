import styled from '@emotion/styled';
import { AiFillStar } from 'react-icons/ai';

export const ButtonFavorite = styled.button`
  height: 32px;
  width: 32px;
  border: none;
  cursor: pointer;
  background-color: transparent;
  padding: 0;
`;

export const IconFavorite = styled(AiFillStar)`
  width: 100%;
  height: 100%;
  fill: ${props => props.fill};
`;
