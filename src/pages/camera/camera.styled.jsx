import styled from '@emotion/styled/macro';
import { FcGallery } from 'react-icons/fc';

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const Frame = styled.iframe`
  border-top-left-radius: 1.2em;
  border-top-right-radius: 1.2em;
`;

export const Video = styled.video`
  position: absolute;
  transform: scaleX(-1);
  width: 300px;
  height: calc(100% - 36px);
  object-fit: cover;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const Canvas = styled.canvas`
  display: none;
`;

export const ButtonPhoto = styled.button`
  position: absolute;
  bottom: 7%;
  left: 50%;
  transform: translate(-50%, -7%);
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: none;
  background: #ffffffcc;
  z-index: 2;
  cursor: pointer;
  &:active {
    box-shadow: inset 0px 0px 5px 5px rgba(0, 0, 0, 0.5);
  }
`;

export const ButtonGallery = styled.button`
  position: absolute;
  bottom: 7%;
  left: 15%;
  transform: translate(-50%, -7%);
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: none;
  z-index: 2;
  background: #ffffffcc;
  cursor: pointer;
`;

export const IconGallery = styled(FcGallery)`
  width: 80%;
  height: 80%;
`;
