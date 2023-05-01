import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import {
  selectContacts,
  selectIsLoading,
  // selectError,
  selectFilteredContacts,
} from 'Redux/Selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'Redux/contacts/Operations';
import {
  ContactsContainer,
  List,
  ListItem,
  LinkStyled,
} from './contactList.styled';
// import Error from 'components/error/error';
import { SkeletonList } from 'components/skeleton/skeleton';

export default function ContactList() {
  const items = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);
  const dispatch = useDispatch();
  const filtredContacts = useSelector(selectFilteredContacts);
  const location = useLocation();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ContactsContainer>
      {isLoading && <SkeletonList />}
      {/* {error && <Error />} */}
      {items.length > 0 && (
        <List>
          {filtredContacts.map(({ _id, name }) => {
            return (
              <ListItem key={_id}>
                <LinkStyled to={`/phonebook/${_id}`} state={{ from: location }}>
                  {name}
                </LinkStyled>
              </ListItem>
            );
          })}
        </List>
      )}
    </ContactsContainer>
  );
}
