import { Button, IconButton } from './button.styled';

export default function ButtonCommon({ titleButton }) {
  return (
    <Button type="submit">
      {titleButton}&nbsp;
      <IconButton />
    </Button>
  );
}
