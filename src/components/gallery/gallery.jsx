import {
  Container,
  Gallery,
  GalleryItem,
  GalleryImage,
} from './gallery.styled';
import { nanoid } from '@reduxjs/toolkit';

export default function GalleryMobile({ gallery }) {
  return (
    <Container>
      <Gallery>
        {gallery.map(image => {
          return (
            <GalleryItem key={nanoid()}>
              <GalleryImage src={image.src} width="320" height="240" />
            </GalleryItem>
          );
        })}
      </Gallery>
    </Container>
  );
}
