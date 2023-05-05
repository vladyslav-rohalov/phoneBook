import { ButtonFavorite, IconFavorite } from './IconFavorite.styled';

export default function Favorite({ favorite, onFavoriteClick }) {
  const fill = () => {
    return favorite ? '#C9AC03' : '#8C8C89';
  };
  return (
    <ButtonFavorite type="button" onClick={onFavoriteClick}>
      <IconFavorite fill={fill()} />
    </ButtonFavorite>
  );
}
