import { Button } from './button.styled';

export default function ButtonCommon({
  titleButton,
  handleClick,
  toggleButton,
}) {
  const backgroundImage = toggleButton
    ? 'none'
    : `linear-gradient(
    to right,
    #6441a5 0%,
    #2a0845 51%,
    #6441a5 100%
  )`;
  return (
    <Button
      type="submit"
      onClick={handleClick}
      disabled={toggleButton}
      style={{ backgroundImage }}
    >
      {titleButton}&nbsp;
    </Button>
  );
}
