import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from 'hooks/useAuth';
import { Time, AuthNav } from 'components';
import { Locked, UnlockButton, IconFingerPrint } from './screenLock.styled';

export default function ScreenLock() {
  const { isLoggedIn } = useAuth();
  const [lock, setLock] = useState(false);
  return (
    <Locked>
      <Time />
      {lock && <AuthNav />}
      {isLoggedIn ? (
        <Link to="/home">
          <UnlockButton type="button">
            <IconFingerPrint />
          </UnlockButton>
        </Link>
      ) : (
        <UnlockButton
          type="button"
          onClick={() => {
            setLock(!lock);
          }}
        >
          <IconFingerPrint />
        </UnlockButton>
      )}
    </Locked>
  );
}
