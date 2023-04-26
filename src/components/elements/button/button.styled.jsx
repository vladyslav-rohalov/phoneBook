import styled from '@emotion/styled/macro';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 8em;
  height: 2em;
  margin: 0 auto;
  background: linear-gradient(90deg, #ee82ee 0%, #673ab7 50%, #9c27b0 100%);
  cursor: pointer;
  border: none;
  border-radius: 0.25em;
  box-shadow: 0 0 0.5em #333;
  transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 0.25em #111;
    transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const IconButton = styled(BsFillArrowRightCircleFill)`
  fill: #ffffffcc;
`;
