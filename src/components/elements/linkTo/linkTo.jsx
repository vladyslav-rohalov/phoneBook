import { LinkStyled } from './linkTo.styled';

export default function LinkTo({ path, text }) {
  return <LinkStyled to={path}>{text}</LinkStyled>;
}
