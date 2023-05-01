import { useLocation } from 'react-router-dom';
import {
  Container,
  ButtonPhone,
  ButtonFavorite,
  ButtonMail,
  ButtonEdit,
  ButtonDelete,
  LinkStyled,
  TagA,
  IconPhone,
  IconFavorite,
  IconMail,
  IconEdit,
  IconDelete,
} from './iconBar.styled';

export default function IconBar({ contact, onDelClick, id, onFavoriteClick }) {
  const location = useLocation();
  const fill = () => {
    return contact.favorite ? '#EDDF0F' : '#DDDDDC';
  };

  return (
    <Container>
      <TagA href={`tel:${contact.phone}`}>
        <ButtonPhone type="button">
          <IconPhone />
        </ButtonPhone>
      </TagA>
      <LinkStyled>
        <ButtonFavorite type="button" onClick={onFavoriteClick}>
          <IconFavorite fill={fill()} />
        </ButtonFavorite>
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
