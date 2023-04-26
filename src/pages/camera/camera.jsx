import React, { useEffect, useState, useRef } from 'react';
import GalleryMobile from 'components/gallery/gallery';
import {
  Container,
  Video,
  Canvas,
  ButtonPhoto,
  ButtonGallery,
  IconGallery,
} from './camera.styled';

export default function Camera() {
  const [gallery, setGallery] = useState([]);
  const [isOpenGallery, setIsOpenGallery] = useState(false);
  const videoRef = useRef(null);
  const photoRef = useRef(null);

  useEffect(() => {
    getVideo();
  }, [videoRef]);

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({
        video: {
          width: { min: 360, ideal: 720, max: 980 },
          height: { min: 640, ideal: 1280, max: 1920 },
          facingMode: 'user',
        },
      })
      .then(stream => {
        let video = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  const paintToCanvas = () => {
    let video = videoRef.current;
    let photo = photoRef.current;
    let ctx = photo.getContext('2d');
    const width = 720;
    const height = 1280;
    photo.width = width;
    photo.height = height;
    return setInterval(() => {
      ctx.drawImage(video, 0, 0, width, height);
    }, 200);
  };

  const takePhoto = () => {
    let photo = photoRef.current;
    const data = photo.toDataURL('image/jpeg');
    const image = { src: data };
    setGallery([...gallery, image]);
  };

  return (
    <Container>
      <Video onCanPlay={() => paintToCanvas()} ref={videoRef} />
      <Canvas ref={photoRef} />
      <ButtonGallery
        type="button"
        onClick={() => {
          setIsOpenGallery(!isOpenGallery);
        }}
      >
        <IconGallery />
      </ButtonGallery>
      <ButtonPhoto type="button" onClick={() => takePhoto()}></ButtonPhoto>

      {isOpenGallery && <GalleryMobile gallery={gallery} />}
    </Container>
  );
}
