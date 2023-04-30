import styled from '@emotion/styled/macro';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10em;
  height: 2.5em;
  margin: 0 auto 2em;
  background-image: linear-gradient(
    to right,
    #6441a5 0%,
    #2a0845 51%,
    #6441a5 100%
  );
  transition: 0.5s;
  background-size: 200% auto;
  text-transform: uppercase;
  color: #ffffff;
  cursor: pointer;
  border: none;
  border-radius: 0.25em;
  box-shadow: 0 0 0.5em #333;
  transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-position: right center;
    color: #ffffff;
    text-decoration: none;
  }
`;
