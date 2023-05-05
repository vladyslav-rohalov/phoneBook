import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const ContactsContainer = styled.div`
  width: calc(100% - 1.25em);
  height: 100%;
  margin: 0.5em auto 2em;
  border-radius: 0.5em;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.75em;
  height: 100%;
  border-radius: 0.5em;
  margin: 0 auto 2em;
  background-color: #ffffffcc;
  list-style: none;
  padding: 0 0.5em;
`;

export const ListItem = styled.li`
  display: flex;
  gap: 0.5em;
  align-items: center;
  border-bottom: 1px solid #c1c0c0;
  cursor: pointer;
  &:nth-of-type(1) {
    margin-top: 0.6em;
  }
  &:hover,
  focus {
    font-weight: 500;
  }
`;

export const LinkStyled = styled(Link)`
  display: flex;
  width: 100%;
  text-decoration: none;
  color: #000000;
`;

export const ContainerAvatar = styled.div`
  width: 32px;
  height: 32px;
`;

export const Avatar = styled.img`
  display: block;
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;
