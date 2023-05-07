import { useAuth } from 'hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

export default function PrivateRoute({
  component: Component,
  redirectTo = '/',
}) {
  const { isLoggedIn, isRefreshing } = useAuth();
  const location = useLocation();
  const shouldRedirect = !isLoggedIn && !isRefreshing;
  return shouldRedirect ? (
    <Navigate to={redirectTo} state={{ from: location }} />
  ) : (
    Component
  );
}
