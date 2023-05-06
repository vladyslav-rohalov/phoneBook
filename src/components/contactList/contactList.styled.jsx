import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const ContactsContainer = styled.div`
  width: calc(100% - 1.25em);
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
    box-shadow: 0 0 0.5em #333;
    border-radius: 4px;
  }
`;

export const LinkStyled = styled(Link)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  text-decoration: none;
  color: #000000;
`;

export const ContainerAvatar = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  width: 32px;
  height: 32px;
`;

export const Avatar = styled.img`
  display: block;
  object-fit: cover;
  aspect-ratio: 1;
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

export const StyledP = styled.p``;
