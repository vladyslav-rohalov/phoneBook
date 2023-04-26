import { useDispatch } from 'react-redux';
import { setFilter } from 'Redux/filter/filterSlice';
import { useLocation } from 'react-router-dom';
import {
  Bar,
  Input,
  Label,
  IconSearch,
  IconCross,
  LinkStyled,
} from './filterBar.styled';

export default function FilterBar() {
  const dispatch = useDispatch();
  const location = useLocation();

  return (
    <Bar>
      <Label>
        <IconSearch />
        <Input
          onChange={e => dispatch(setFilter(e.target.value))}
          placeholder="Find contacts by name"
          type="text"
        ></Input>
        <LinkStyled to={`/add`} state={{ from: location }}>
          <IconCross />
        </LinkStyled>
      </Label>
    </Bar>
  );
}
