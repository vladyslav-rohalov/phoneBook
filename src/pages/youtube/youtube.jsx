import { Container, Frame } from './youtube.styled';

export default function Youtube() {
  return (
    <Container>
      <Frame
        width="100%"
        height="96%"
        src="https://www.youtube.com/embed/TO-_3tck2tg"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></Frame>
    </Container>
  );
}
