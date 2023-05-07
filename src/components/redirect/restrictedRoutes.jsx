import { useAuth } from 'hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

export default function RestrictedRoute({
  component: Component,
  redirectTo = '/home',
}) {
  const { isLoggedIn } = useAuth();
  const location = useLocation();
  return isLoggedIn ? (
    <Navigate to={location.state?.from ?? redirectTo} />
  ) : (
    Component
  );
}
