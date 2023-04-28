import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectIsRefreshing,
  selectUser,
  selectIsVerify,
} from '../Redux/auth/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const isVerificationCodeSent = useSelector(selectIsVerify);
  const user = useSelector(selectUser);

  return {
    isLoggedIn,
    isRefreshing,
    isVerificationCodeSent,
    user,
  };
};
