import { useDispatch } from 'react-redux';
import authOperations from 'Redux/auth/operations';
import { Container } from '../../components/elements/backdropContainer/backdropContainer.styled';
import { ContainerUtils } from '../../components/elements/utilsContainer/utilsContainer.styled';
import { Title } from 'components/elements/title/title.styled';
import { Form, Label, Input } from '../../components/elements/form/form.styled';
import ButtonCommon from 'components/elements/button/button';

export default function SignIn() {
  const dispatch = useDispatch();

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
      </ContainerUtils>
    </Container>
  );
}
