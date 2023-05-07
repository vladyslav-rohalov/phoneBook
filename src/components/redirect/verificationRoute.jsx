import { useAuth } from 'hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

export default function VerificationRoute({
  component: Component,
  redirectTo = '/signin',
}) {
  const { isVerify } = useAuth();
  const location = useLocation();
  return isVerify ? (
    <Navigate to={location.state?.from ?? redirectTo} />
  ) : (
    Component
  );
}
