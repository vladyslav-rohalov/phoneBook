import { TitleH1, FilterBar, TitleH2, ContactList } from 'components';
import { Container } from 'components/elements';

export default function Phonebook() {
  return (
    <Container>
      <TitleH1 />
      <FilterBar />
      <TitleH2 />
      <ContactList />
    </Container>
  );
}
