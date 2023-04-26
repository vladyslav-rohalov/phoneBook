import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { GoSearch } from 'react-icons/go';
import { AiOutlinePlus } from 'react-icons/ai';

export const Bar = styled.div`
  display: flex;
  gap: 1.25em;
  width: calc(100% - 1.25em);
  background-color: #ffffffcc;
  margin: 3%;
  border-radius: 0.5em;
`;

export const Label = styled.label`
  display: flex;
  min-height: 4vh;
  width: 100%;
  align-items: center;
  margin: 0 0.5em;
`;

export const Input = styled.input`
  height: calc(100% - 2px);
  width: 75%;
  padding: 0em 0em 0em 0.5em;
  border: none;
  border-radius: 0.5em;
  margin-right: 0.25em;
  background-color: transparent;
  &:focus {
    outline: none;
  }
`;

export const IconSearch = styled(GoSearch)`
  fill: #000000;
`;

export const IconCross = styled(AiOutlinePlus)`
  fill: #000000;
`;

export const LinkStyled = styled(Link)`
  margin: 0 auto;
`;
