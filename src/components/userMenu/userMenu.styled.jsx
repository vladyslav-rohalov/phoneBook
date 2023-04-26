import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { RxAvatar } from 'react-icons/rx';
import { RiLogoutCircleLine } from 'react-icons/ri';

export const LinkStyled = styled(Link)`
  text-decoration: none;
`;

export const ContainerUserMenu = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1em;
  width: calc(100% - 1.25em);
  height: 1em;
  padding: 0 0.625em;
  margin-top: 0.3em;
  color: #ffffff;
  z-index: 1;
`;

export const Greetings = styled.span`
  display: flex;
  gap: 0.5em;
  font-size: 1em;
  margin: 0;
  align-items: center;
`;

export const IconUser = styled(RxAvatar)`
  width: 1em;
  height: 1em;
  fill: #ffffff;
`;

export const ButtonSignOut = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: end;
  border: none;
  cursor: pointer;
  width: 1.25em;
  height: 1.25em;
  border-radius: 0.5em;
  background: transparent;
`;

export const IconSignOut = styled(RiLogoutCircleLine)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  fill: #ffffff;
  width: 100%;
  height: 100%;
`;
