import {
  HomeIconBar,
  LinkStyled,
  ButtonPhone,
  ButtonFilmoteka,
  IconFilmoteka,
  IconPhone,
  ButtonYoutube,
  IconYouTube,
  ButtonCamera,
  IconCamera,
} from './navigation.styled';

export default function Navigation() {
  return (
    <HomeIconBar>
      <LinkStyled to="/phonebook">
        <ButtonPhone type="button">
          <IconPhone />
        </ButtonPhone>
      </LinkStyled>

      <LinkStyled to="/filmoteka">
        <ButtonFilmoteka>
          <IconFilmoteka />
        </ButtonFilmoteka>
      </LinkStyled>

      <LinkStyled to="/camera">
        <ButtonCamera>
          <IconCamera />
        </ButtonCamera>
      </LinkStyled>

      <LinkStyled to="/youtube">
        <ButtonYoutube>
          <IconYouTube />
        </ButtonYoutube>
      </LinkStyled>
    </HomeIconBar>
  );
}
