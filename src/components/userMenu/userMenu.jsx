import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import authOperations from 'Redux/auth/operations';
import {
  ContainerUserMenu,
  Greetings,
  IconUser,
  LinkStyled,
  ButtonSignOut,
  IconSignOut,
} from './userMenu.styled';

export default function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useAuth();
  return (
    <ContainerUserMenu>
      <Greetings>
        <IconUser />
        Hi, {user.name}
      </Greetings>

      <LinkStyled>
        <ButtonSignOut
          type="button"
          onClick={() => dispatch(authOperations.signOut())}
        >
          <IconSignOut />
        </ButtonSignOut>
      </LinkStyled>
    </ContainerUserMenu>
  );
}
