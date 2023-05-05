import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';
import { Backdrop, UserMenu } from 'components';
import { useAuth } from 'hooks/useAuth';
import {
  Frame,
  Camera,
  ButtonLock,
  BackBar,
  Button,
  IconHome,
  IconBack,
} from './sharedLayout.styled';

export default function SharedLayout() {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/home';
  const { isLoggedIn } = useAuth();
  return (
    <>
      <Backdrop />
      <Frame>
        <Camera />
        {isLoggedIn && <UserMenu />}

        <Suspense>
          <Outlet />
        </Suspense>

        <Link to={'/'}>
          <ButtonLock />
        </Link>

        <BackBar>
          <Link to={'/home'}>
            <Button>
              <IconHome />
            </Button>
          </Link>
          <Link to={backLinkHref}>
            <Button>
              <IconBack />
            </Button>
          </Link>
        </BackBar>
      </Frame>
    </>
  );
}
