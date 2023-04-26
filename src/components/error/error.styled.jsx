import styled from '@emotion/styled';
import { FaRegSadTear } from 'react-icons/fa';

export const ContainerError = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #ffffffcc;
  border-radius: 0.5em;
  height: 20vh;
  align-items: center;
`;

export const IconSad = styled(FaRegSadTear)`
  width: 2em;
  height: 2em;
`;

export const TextError = styled.p`
  font-size: 1.5em;
  margin: 0.5em;
`;
