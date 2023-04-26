import Time from 'components/time/time';
import Navigation from 'components/navigation/navigation';
import { Container } from '../../components/elements/backdropContainer/backdropContainer.styled';

export default function Home() {
  return (
    <Container>
      <Time />
      <Navigation />
    </Container>
  );
}
