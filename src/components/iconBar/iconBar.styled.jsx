import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { BiPhone } from 'react-icons/bi';
import { AiFillStar } from 'react-icons/ai';
import { CiMail } from 'react-icons/ci';
import { AiOutlineDelete } from 'react-icons/ai';
import { AiOutlineEdit } from 'react-icons/ai';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 10%;
  box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.75);
  border-radius: 0.5em;
  padding: 0 0.5em;
  margin-top: 2em;
  align-items: center;
}`;

const buttonStyle = `
height: 3em;
width: 3em;
border-radius: 50%;
border: none;
cursor: pointer;`;

export const ButtonPhone = styled.button`
  ${buttonStyle}
  background-color: #3ad364;
`;

export const ButtonFavorite = styled.button`
  ${buttonStyle}
  background-color: #ffffff;
`;

export const ButtonMail = styled.button`
  ${buttonStyle}
  background-color: #41a1ef;
`;

export const ButtonEdit = styled.button`
  ${buttonStyle}
  background-color: #c272ce;
`;

export const ButtonDelete = styled.button`
  ${buttonStyle}
  background-color: #F30C27;
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
`;

export const TagA = styled.a`
  text-decoration: none;
`;

const IconStyle = ` 
width: 100%;
height: 100%;
fill: #FFFFFF;
`;

export const IconPhone = styled(BiPhone)`
  ${IconStyle}
`;

export const IconFavorite = styled(AiFillStar)`
  ${IconStyle}
  fill: ${props => props.fill};
`;

export const IconMail = styled(CiMail)`
  ${IconStyle}
`;

export const IconEdit = styled(AiOutlineEdit)`
  ${IconStyle}
`;

export const IconDelete = styled(AiOutlineDelete)`
  ${IconStyle}
`;
