import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useContacts } from 'hooks/useContacts';
import { useEffect } from 'react';
import contactsOperations from 'Redux/contacts/operations';
import { SkeletonList } from 'components';
import { Favorite } from 'components/elements';
import {
  ContactsContainer,
  List,
  ListItem,
  LinkStyled,
  ContainerAvatar,
  Avatar,
  StyledP,
} from './contactList.styled';

export default function ContactList() {
  const { contacts, isLoading, filtredContacts } = useContacts();

  const dispatch = useDispatch();

  const location = useLocation();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <ContactsContainer>
      {isLoading && <SkeletonList />}
      {contacts.length > 0 && (
        <List>
          {filtredContacts.map(({ _id, name, avatarURL, favorite }) => {
            return (
              <ListItem key={_id}>
                <LinkStyled to={`/phonebook/${_id}`} state={{ from: location }}>
                  <ContainerAvatar>
                    <Avatar src={avatarURL} alt="avatar" />
                    <StyledP>{name}</StyledP>
                  </ContainerAvatar>

                  <Favorite favorite={favorite} />
                </LinkStyled>
              </ListItem>
            );
          })}
        </List>
      )}
    </ContactsContainer>
  );
}
