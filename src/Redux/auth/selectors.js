export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUser = state => state.auth.user;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectIsVerificationCodeSent = state =>
  state.auth.isVerificationCodeSent;

export const selectIsVerify = state => state.auth.isVerify;

export const selectMessage = state => state.auth.message;

export const selectError = state => state.auth.error;
