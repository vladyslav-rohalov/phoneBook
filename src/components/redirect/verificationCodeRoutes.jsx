import { useAuth } from 'hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

export default function VerificationCodeRoute({
  component: Component,
  redirectTo = '/verify',
}) {
  const { isVerificationCodeSent } = useAuth();
  // console.log(
  //   `VerificationCodeRoute isVerificationCodeSent ###${isVerificationCodeSent}### redirect to /verify`
  // );
  const location = useLocation();
  return isVerificationCodeSent ? (
    <Navigate to={location.state?.from ?? redirectTo} />
  ) : (
    Component
  );
}
