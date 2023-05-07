import { useContacts } from 'hooks/useContacts';
import { TitleH2Styled } from './titleH2.styled';

export default function TitleH2() {
  const { contacts } = useContacts();
  return <TitleH2Styled>Contacts ({contacts.length})</TitleH2Styled>;
}
