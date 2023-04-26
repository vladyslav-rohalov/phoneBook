import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { BsCircleFill } from 'react-icons/bs';
import { RiArrowGoBackLine } from 'react-icons/ri';
import { RiHomeLine } from 'react-icons/ri';

export const Frame = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 18.75em;
  height: 40em;
  max-height: 100vh;
  border: 0.3em solid black;
  border-radius: 1.5em;
  background-size: cover;
  &::-webkit-scrollbar {
    width: 0em;
    height: 0em;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::before {
    content: '';
    position: fixed;
    display: block;
    top: 15%;
    left: -4.2em;
    width: 7.5em;
    height: 0.5em;
    background: black;
    border-bottom-right-radius: 0.4em;
    border-bottom-left-radius: 0.4em;
    border-left: 0.6em;
    rotate: 90deg;
    box-shadow: 2px 0px 2px 2px rgba(121, 128, 133, 0.3) inset;
  }
`;

const button = keyframes`
0% {
  width: 5%;
  height: 10%;
  bottom: 20%;
  opacity: 0;
}
50% {
  width: 50%;
  height: 20%;
  bottom: 20%;
  opacity: 1;
}

100% {
  bottom: -20%;
  opacity: 0;

}
`;

export const ButtonLock = styled.button`
  position: fixed;
  display: block;
  top: 15%;
  right: -2em;
  width: 3em;
  height: 0.5em;
  background: black;
  border: none;
  border-top-left-radius: 0.3em;
  border-top-right-radius: 0.3em;
  border-left: 0.7em;
  rotate: 90deg;
  cursor: pointer;
  box-shadow: -2px 0px 2px 2px rgba(121, 128, 133, 0.3) inset;
  &::before {
    content: '';
    position: absolute;
    width: 50%;
    height: 25%;
    border-top-left-radius: 0.3em;
    border-top-right-radius: 0.3em;
    background-color: #ffffffcc;
    bottom: 20%;
    transform: translate(-50%, -50%);
    animation: ${button} 5s infinite;
  }
`;

export const Camera = styled(BsCircleFill)`
  width: 1.25em;
  height: 1.25em;
  margin: 0.25em auto;
  z-index: 20;
`;

export const BackBar = styled.div`
  position: absolute;
  bottom: -0.2em;
  display: flex;
  justify-content: center;
  gap: 6em;
  background-color: #000000;
  width: 100%;
  height: 2.5em;
  z-index: 1;
  border-bottom-left-radius: 1.1em;
  border-bottom-right-radius: 1.1em;
  align-items: center;
  z-index: 100;
  box-shadow: 0px -5px 6px 4px rgba(121, 128, 133, 0.3) inset;
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;
`;
const buttonStyle = `fill: #ffffffcc;
width: 1.5em;
height: 1.5em;`;

export const IconBack = styled(RiArrowGoBackLine)`
  ${buttonStyle}
`;

export const IconHome = styled(RiHomeLine)`
  ${buttonStyle}
`;
