import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { AiOutlineLogin } from 'react-icons/ai';
import { HiArrowNarrowRight } from 'react-icons/hi';

export const LinkStyled = styled(Link)`
  text-decoration: none;
`;

export const ContainerAuth = styled.div`
  display: flex;
  gap: 3em;
  height: 5em;
  margin: 0 auto;
`;

const buttonCoomonStyle = `
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  font-size: 0.9em;
  width: 5em;
  height: 5em;
  border-radius: 25%;
`;

export const ButtonSignUp = styled.button`
  ${buttonCoomonStyle}
  background: linear-gradient(
    90deg,
    rgba(180, 98, 14, 1) 0%,
    rgba(240, 195, 78, 1) 13%,
    rgba(240, 195, 78, 1) 100%
  );
`;

export const ButtonSignIn = styled.button`
  ${buttonCoomonStyle}
  background: linear-gradient(
    90deg,
    rgba(25, 133, 55, 1) 0%,
    rgba(58, 211, 100, 1) 13%,
    rgba(58, 211, 100, 1) 100%
  );
`;

export const IconSignIn = styled(AiOutlineLogin)`
  position: absolute;
  top: 50%;
  left: 3%;
  transform: translate(-3%, -50%);
  fill: #000000;
  width: 2em;
  height: 2em;
`;

export const IconSignUp = styled(HiArrowNarrowRight)`
  position: absolute;
  top: 50%;
  left: 3%;
  transform: translate(-3%, -50%);
  fill: #000000;
  width: 2em;
  height: 2em;
`;
