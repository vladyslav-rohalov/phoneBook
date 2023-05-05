import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useAuth } from 'hooks/useAuth';
import authOperations from 'Redux/auth/operations';
import { Toaster } from 'react-hot-toast';
import { notifyError, notifySucces } from 'helpers/notify';
import {
  Container,
  ContainerUtils,
  Title,
  Form,
  Label,
  Input,
  ButtonCommon,
  VerificationText,
} from 'components/elements/';

export default function Verify() {
  const dispatch = useDispatch();
  const email = JSON.parse(localStorage.getItem('email'));
  const { error, message } = useAuth();

  useEffect(() => {
    if (error !== null && error.status >= 400) notifyError(error.message);
    if (error === null && message !== null) notifySucces(message);
  }, [error, message]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const verificationToken = form.elements.code.value;
    dispatch(
      authOperations.verifyEmail({
        verificationToken,
      })
    );
    form.reset();
  };

  const resendVerify = () => {
    dispatch(
      authOperations.resendVerifyEmail({
        email,
      })
    );
  };

  return (
    <Container>
      <ContainerUtils>
        <Toaster />
        <Title>User verification</Title>
        <VerificationText email={email} />
        <Form onSubmit={handleSubmit}>
          <Label>
            <Input
              type="text"
              name="code"
              placeholder="Verification code"
              required
            />
          </Label>
          <ButtonCommon titleButton="Send" />
        </Form>
        <ButtonCommon titleButton="Resend code" handleClick={resendVerify} />
        {/* <button type="button" onClick={resendVerify}>
          Resend verify
        </button> */}
      </ContainerUtils>
    </Container>
  );
}
