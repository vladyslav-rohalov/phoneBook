import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectIsRefreshing,
  selectUser,
  selectIsVerificationCodeSent,
  selectIsVerify,
  selectMessage,
  selectError,
} from '../Redux/auth/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const isVerificationCodeSent = useSelector(selectIsVerificationCodeSent);
  const isVerify = useSelector(selectIsVerify);
  const user = useSelector(selectUser);
  const message = useSelector(selectMessage);
  const error = useSelector(selectError);

  return {
    isLoggedIn,
    isRefreshing,
    user,
    isVerificationCodeSent,
    isVerify,
    message,
    error,
  };
};
