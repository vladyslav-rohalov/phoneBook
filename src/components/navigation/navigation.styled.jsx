import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { BiPhone } from 'react-icons/bi';
import { TbMovie } from 'react-icons/tb';
import { HiCamera } from 'react-icons/hi';
import { AiFillYoutube } from 'react-icons/ai';

export const HomeIconBar = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  bottom: 0;
  width: calc(100% - 1.25em);
  height: 10vh;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  background-color: transparent;
  padding: 0 0.625em 2em 0.625em;
  align-items: center;
  border-radius: 1.1em;
`;

export const LinkStyled = styled(Link)`
  width: 3.5em;
  height: 3.5em;
`;

const buttonDefaultSyle = `
width: 100%;
height: 100%;
border: none;
border-radius: 25%;`;

export const ButtonPhone = styled.button`
  ${buttonDefaultSyle}
  background-color: #3ad364;
  cursor: pointer;
`;

export const IconPhone = styled(BiPhone)`
  width: 2.5em;
  height: 2.5em;
  fill: white;
`;

export const ButtonFilmoteka = styled.button`
  ${buttonDefaultSyle}
  background-color: #41a1ef;
  cursor: pointer;
`;

export const IconFilmoteka = styled(TbMovie)`
  width: 2.5em;
  height: 2.5em;
  fill: white;
`;

export const ButtonCamera = styled.button`
  ${buttonDefaultSyle}
  background-color: #F84924;
  cursor: pointer;
`;

export const IconCamera = styled(HiCamera)`
  width: 2.5em;
  height: 2.5em;
`;

export const ButtonYoutube = styled.button`
  ${buttonDefaultSyle}
  background-color: #ffffff;
  cursor: pointer;
`;

export const IconYouTube = styled(AiFillYoutube)`
  width: 2.5em;
  height: 2.5em;
  fill: red;
`;
