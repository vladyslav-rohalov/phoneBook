import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
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
  SmallText,
} from 'components/elements/';

export default function Verify() {
  const [resendButton, setResendButton] = useState(true);
  const dispatch = useDispatch();
  const email = JSON.parse(localStorage.getItem('email'));
  const { error, message } = useAuth();

  useEffect(() => {
    setTimeout(() => {
      setResendButton(false);
    }, 30000);
  }, []);

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
          <ButtonCommon titleButton="Confirm" />
        </Form>
        <SmallText>Will become active in 60 seconds</SmallText>
        <ButtonCommon
          titleButton="Resend code"
          handleClick={resendVerify}
          toggleButton={resendButton}
        />
      </ContainerUtils>
    </Container>
  );
}
