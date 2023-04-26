import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const ContactsContainer = styled.div`
  width: calc(100% - 1.25em);
  margin: 0 auto 2em;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.75em;
  list-style: none;
  border-radius: 0.5em;
  padding: 0 0.5em;
  background-color: #ffffffcc;
  box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.75);
`;

export const ListItem = styled.li`
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
