import {
  LinkStyled,
  ContainerAuth,
  ButtonSignUp,
  ButtonSignIn,
} from './authNav.styled';

export default function AuthNav() {
  return (
    <ContainerAuth>
      <LinkStyled to="/signup">
        <ButtonSignUp type="button">
          Sign <br />
          Up
        </ButtonSignUp>
      </LinkStyled>

      <LinkStyled to="/signin">
        <ButtonSignIn type="button">
          Sign <br />
          In
        </ButtonSignIn>
      </LinkStyled>
    </ContainerAuth>
  );
}
