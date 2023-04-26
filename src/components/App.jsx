import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import authOperations from 'Redux/auth/operations';
import SharedLayout from './sharedLayout/sharedLayout';
import PrivateRoute from './redirect/privateRoutes';
import RestrictedRoute from './redirect/restrictedRoutes';

const ScreenLock = lazy(() => import('../pages/screenLock/screenLock'));
const Home = lazy(() => import('../pages/home/home'));
const Phonebook = lazy(() => import('../pages/phoneBook/phooneBook'));
const ContactInfo = lazy(() => import('../pages/contactInfo/contactInfo'));
const EditNewContact = lazy(() => import('../pages/editContact/editContact'));
const Youtube = lazy(() => import('../pages/youtube/youtube'));
const Filmoteka = lazy(() => import('../pages/filmoteka/filmoteka'));
const Camera = lazy(() => import('../pages/camera/camera'));
const SignIn = lazy(() => import('../pages/signIn/signIn'));
const SignUp = lazy(() => import('../pages/signUp/signUp'));
const AddNewContact = lazy(() =>
  import('../pages/addNewContact/addNewContact')
);

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
            path="signin"
            element={
              <RestrictedRoute redirectTo="/home" component={<SignIn />} />
            }
          />
          <Route
            path="signup"
            element={
              <RestrictedRoute redirectTo="/home" component={<SignUp />} />
            }
          />
        </Route>
      </Routes>
    )
  );
}
