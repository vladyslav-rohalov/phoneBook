import styled from '@emotion/styled/macro';
import { keyframes } from '@emotion/react';
import { IoMdFingerPrint } from 'react-icons/io';

export const Locked = styled.div`
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  left: 0;
  background-color: #000000;
  height: 100%;
  width: 100%;
  border-radius: 1.1em;
  box-shadow: 0px 0px 6px 4px rgba(121, 128, 133, 0.3) inset;
`;

export const TimeDate = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10vh;
  margin: 0 auto;
  align-items: center;
  color: white;
`;

const ring = keyframes`
0% {
  width: 5em;
  height: 5em;
  opacity: 1;
}
100% {
  width: 8em;
  height: 8em;
  opacity: 0;
}
  `;

export const UnlockButton = styled.button`
  position: absolute;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -90%);
  background-color: black;
  padding: 0;
  border: none;
  border-radius: 50%;
  &::before {
    content: '';
    position: absolute;
    width: 5em;
    height: 5em;
    border-radius: 100%;
    border: 0.2em solid #ffffffcc;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: ${ring} 5s infinite;
  }
`;

export const IconFingerPrint = styled(IoMdFingerPrint)`
  width: 5em;
  height: 5em;
  fill: #ffffff;
`;
