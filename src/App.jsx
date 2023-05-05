import { lazy, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import authOperations from 'Redux/auth/operations';
import {
  SharedLayout,
  PrivateRoute,
  RestrictedRoute,
  VerificationCodeRoute,
  VerificationRoute,
} from './components';

const ScreenLock = lazy(() => import('./pages/screenLock/screenLock'));
const Home = lazy(() => import('./pages/home/home'));
const Phonebook = lazy(() => import('./pages/phoneBook/phooneBook'));
const ContactInfo = lazy(() => import('./pages/contactInfo/contactInfo'));
const EditNewContact = lazy(() => import('./pages/editContact/editContact'));
const Youtube = lazy(() => import('./pages/youtube/youtube'));
const Filmoteka = lazy(() => import('./pages/filmoteka/filmoteka'));
const Camera = lazy(() => import('./pages/camera/camera'));
const SignIn = lazy(() => import('./pages/signIn/signIn'));
const SignUp = lazy(() => import('./pages/signUp/signUp'));
const Verify = lazy(() => import('./pages/verifyEmail/verifyEmail'));
const AddNewContact = lazy(() => import('./pages/addNewContact/addNewContact'));
const PageNotFound = lazy(() => import('./pages/404/404'));

export default function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(authOperations.refreshUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<ScreenLock />} />
          <Route
            path="home"
            element={<PrivateRoute redirectTo="/signin" component={<Home />} />}
          />
          <Route
            path="phonebook"
            element={
              <PrivateRoute redirectTo="/signin" component={<Phonebook />} />
            }
          />
          <Route
            path="phonebook/:id"
            element={
              <PrivateRoute redirectTo="/signin" component={<ContactInfo />} />
            }
          />
          <Route
            path="add"
            element={
              <PrivateRoute
                redirectTo="/signin"
                component={<AddNewContact />}
              />
            }
          />
          <Route
            path="edit/:id"
            element={
              <PrivateRoute
                redirectTo="/signin"
                component={<EditNewContact />}
              />
            }
          />
          <Route
            path="youtube"
            element={
              <PrivateRoute redirectTo="/signin" component={<Youtube />} />
            }
          />
          <Route
            path="filmoteka"
            element={
              <PrivateRoute redirectTo="/signin" component={<Filmoteka />} />
            }
          />
          <Route
            path="camera"
            element={
              <PrivateRoute redirectTo="/signin" component={<Camera />} />
            }
          />
          <Route
            path="verify"
            element={
              <VerificationRoute redirectTo="/signin" component={<Verify />} />
            }
          />
          <Route
            path="signin"
            element={
              <RestrictedRoute redirectTo="/home" component={<SignIn />} />
            }
          />
          <Route
            path="signup"
            element={
              <VerificationCodeRoute
                redirectTo="/verify"
                component={<SignUp />}
              />
            }
          />
          <Route path="404" element={<PageNotFound />} />
        </Route>
      </Routes>
    )
  );
}
