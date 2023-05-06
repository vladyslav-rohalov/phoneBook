import { ContainerFavorite, IconFavorite } from './IconFavorite.styled';

export default function Favorite({ favorite }) {
  const fill = () => {
    return favorite ? '#C9AC03' : '#8C8C89';
  };
  return (
    <ContainerFavorite type="button">
      <IconFavorite fill={fill()} />
    </ContainerFavorite>
  );
}
