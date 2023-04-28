import { useDispatch } from 'react-redux';
import authOperations from 'Redux/auth/operations';
import { Container } from '../../components/elements/backdropContainer/backdropContainer.styled';
import { ContainerUtils } from '../../components/elements/utilsContainer/utilsContainer.styled';
import { Title } from 'components/elements/title/title.styled';

import ButtonCommon from 'components/elements/button/button';

export default function SignUp() {
  // const dispatch = useDispatch();

  return (
    <Container>
      <ContainerUtils>
        <Title>User verification</Title>
        <p>
          A letter has been sent to the email address you provided when you
          registered. To confirm your registration, follow the link in the
          letter.{' '}
        </p>
        <ButtonCommon titleButton="Resend email" />
      </ContainerUtils>
    </Container>
  );
}
