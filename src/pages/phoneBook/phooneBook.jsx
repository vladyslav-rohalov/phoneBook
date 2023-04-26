import TitleH1 from 'components/titleH1/titleH1.jsx';
import FilterBar from 'components/filterBar/filterBar';
import TitleH2 from 'components/titleH2/titleH2';
import ContactList from 'components/contactList/contactList';
import { Container } from '../../components/elements/backdropContainer/backdropContainer.styled';

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
