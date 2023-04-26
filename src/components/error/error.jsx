import { ContainerError, TextError, IconSad } from './error.styled';

export default function Error() {
  return (
    <ContainerError>
      <IconSad />
      <TextError>Oops!</TextError>
      <TextError>Something went wrong.</TextError>
    </ContainerError>
  );
}
