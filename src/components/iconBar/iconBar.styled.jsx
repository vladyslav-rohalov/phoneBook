import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { BiPhone } from 'react-icons/bi';
import { AiOutlineMessage } from 'react-icons/ai';
import { FiMail } from 'react-icons/fi';
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

export const ButtonMessage = styled.button`
  ${buttonStyle}
  background-color: #41a1ef;
  opacity: 0.3;
`;

export const ButtonMail = styled.button`
  ${buttonStyle}
  background-color: #ffffff;
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

export const IconMessage = styled(AiOutlineMessage)`
  ${IconStyle}
`;

export const IconMail = styled(FiMail)`
  ${IconStyle}
`;

export const IconEdit = styled(AiOutlineEdit)`
  ${IconStyle}
`;

export const IconDelete = styled(AiOutlineDelete)`
  ${IconStyle}
`;
