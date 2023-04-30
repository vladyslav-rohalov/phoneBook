import { TextStyled, SpanStyled } from './verificationText.styled';

export default function VerificationText({ email }) {
  return (
    <TextStyled>
      Letter with the code was sent to the <SpanStyled>{email}</SpanStyled>, to
      confirm registration, insert the code from the letter in the field below.
    </TextStyled>
  );
}
