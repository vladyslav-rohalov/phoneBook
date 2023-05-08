import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useAuth } from 'hooks/useAuth';
import authOperations from 'Redux/auth/operations';
import { Toaster } from 'react-hot-toast';
import { notifyError } from 'helpers/notify';
import {
  Container,
  ContainerUtils,
  Title,
  Form,
  Label,
  Input,
  ButtonCommon,
  LinkTo,
} from 'components/elements';

export default function SignIn() {
  const dispatch = useDispatch();

  const { error } = useAuth();

  useEffect(() => {
    if (error === null) {
      return;
    } else notifyError(error?.message);
  }, [error]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    dispatch(
      authOperations.signIn({
        email,
        password,
      })
    );
    form.reset();
  };

  return (
    <Container>
      <ContainerUtils>
        {error?.message !== 'Not authorized' &&
          error !== 'Unable to fetch user' && <Toaster />}
        <Title>Sign In</Title>
        <Form onSubmit={handleSubmit}>
          <Label>
            <Input
              type="email"
              name="email"
              placeholder="Email"
              required
              autoComplete="email"
            />
          </Label>
          <Label>
            <Input
              type="password"
              name="password"
              placeholder="Password"
              required
              autoComplete="current-password"
            />
          </Label>
          <ButtonCommon titleButton="Sign In" />
        </Form>
        <LinkTo path={'/signup'} text="No account? Sign up" />
      </ContainerUtils>
    </Container>
  );
}
