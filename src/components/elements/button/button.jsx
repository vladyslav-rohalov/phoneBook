import { Button } from './button.styled';

export default function ButtonCommon({ titleButton, handleClick }) {
  return (
    <Button type="submit" onClick={handleClick}>
      {titleButton}&nbsp;
    </Button>
  );
}
