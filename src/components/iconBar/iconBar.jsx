import { useLocation } from 'react-router-dom';
import {
  Container,
  ButtonPhone,
  ButtonMessage,
  ButtonMail,
  ButtonEdit,
  ButtonDelete,
  LinkStyled,
  TagA,
  IconPhone,
  IconMessage,
  IconMail,
  IconEdit,
  IconDelete,
} from './iconBar.styled';

export default function IconBar({ contact, onDelClick, id }) {
  const location = useLocation();
  return (
    <Container>
      <TagA href={`tel:${contact.phone}`}>
        <ButtonPhone type="button">
          <IconPhone />
        </ButtonPhone>
      </TagA>
      <LinkStyled>
        <ButtonMessage type="button" disabled>
          <IconMessage />
        </ButtonMessage>
      </LinkStyled>
      <TagA href={`mailto:${contact.email}`}>
        <ButtonMail type="button">
          <IconMail />
        </ButtonMail>
      </TagA>
      <LinkStyled to={`/edit/${id}`} state={{ from: location }}>
        <ButtonEdit type="button">
          <IconEdit />
        </ButtonEdit>
      </LinkStyled>
      <LinkStyled to={`/phonebook`}>
        <ButtonDelete type="button" onClick={onDelClick}>
          <IconDelete />
        </ButtonDelete>
      </LinkStyled>
    </Container>
  );
}
