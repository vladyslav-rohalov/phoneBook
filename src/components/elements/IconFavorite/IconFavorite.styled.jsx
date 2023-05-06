import styled from '@emotion/styled';
import { AiFillStar } from 'react-icons/ai';

export const ContainerFavorite = styled.div`
  height: 32px;
  width: 32px;
  border: none;
  background-color: transparent;
  padding: 0;
`;

export const IconFavorite = styled(AiFillStar)`
  width: 100%;
  height: 100%;
  fill: ${props => props.fill};
`;
