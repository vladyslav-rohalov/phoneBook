import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useAuth } from 'hooks/useAuth';
import authOperations from 'Redux/auth/operations';
import { Container } from '../../components/elements/backdropContainer/backdropContainer.styled';
import { ContainerUtils } from '../../components/elements/utilsContainer/utilsContainer.styled';
import { Title } from 'components/elements/title/title.styled';
import { Form, Label, Input } from '../../components/elements/form/form.styled';
import ButtonCommon from 'components/elements/button/button';
import LinkTo from '../../components/elements/linkTo/linkTo';
import { Toaster } from 'react-hot-toast';
import { notifyError } from 'helpers/notify';

export default function SignIn() {
  const dispatch = useDispatch();

  const { error } = useAuth();

  useEffect(() => {
    if (error !== null && error.status >= 400) notifyError(error.message);
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
        <Toaster />
        <Title>Sign In</Title>
        <Form onSubmit={handleSubmit}>
          <Label>
            <Input type="email" name="email" placeholder="Email" required />
          </Label>
          <Label>
            <Input
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </Label>
          <ButtonCommon titleButton="Sign In" />
        </Form>
        <LinkTo path={'/signup'} text="No account? Sign up" />
      </ContainerUtils>
    </Container>
  );
}
