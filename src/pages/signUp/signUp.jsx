import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useAuth } from 'hooks/useAuth';
import authOperations from 'Redux/auth/operations';
import { Container } from '../../components/elements/backdropContainer/backdropContainer.styled';
import { ContainerUtils } from '../../components/elements/utilsContainer/utilsContainer.styled';
import { Title } from 'components/elements/title/title.styled';
import { Form, Label, Input } from '../../components/elements/form/form.styled';
import LinkTo from '../../components/elements/linkTo/linkTo';
import ButtonCommon from 'components/elements/button/button';
import { Toaster } from 'react-hot-toast';
import { notifyError, notifySucces } from 'helpers/notify';

export default function SignUp() {
  const dispatch = useDispatch();

  const { error } = useAuth();

  useEffect(() => {
    if (error !== null && error.status >= 400) notifyError(error.message);
  }, [error]);

  const handleLocalStorage = e => {
    localStorage.setItem('email', JSON.stringify(e.target.value));
  };
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    dispatch(
      authOperations.signUp({
        name,
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
        <Title>Sign Up</Title>
        <Form onSubmit={handleSubmit}>
          <Label>
            <Input
              type="text"
              name="name"
              placeholder="Name"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </Label>
          <Label>
            <Input
              type="email"
              name="email"
              placeholder="Email"
              pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
              title="The email address must be set to letters and contain @, it must not contain spaces, dashes, or parentheses. "
              required
              onChange={handleLocalStorage}
            />
          </Label>
          <Label>
            <Input
              type="password"
              name="password"
              placeholder="Password"
              // pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$"
              title="The password length must be greater than or equal to 8 and less or equal to 16, at least one lowercase letter & one uppercase letter, at least one numeric & one special symbol(!@#$%^&*=+-_) "
              required
            />
          </Label>
          <ButtonCommon titleButton="Sign Up" />
        </Form>
        <LinkTo path={'/signin'} text="Already have an account? Sign in" />
      </ContainerUtils>
    </Container>
  );
}
