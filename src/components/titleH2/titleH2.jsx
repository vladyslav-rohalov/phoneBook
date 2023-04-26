import { useSelector } from 'react-redux';
import { selectContacts } from 'Redux/Selectors';
import { TitleH2Styled } from './titleH2.styled';

export default function TitleH2() {
  const contacts = useSelector(selectContacts);
  return <TitleH2Styled>Contacts ({contacts.length})</TitleH2Styled>;
}
