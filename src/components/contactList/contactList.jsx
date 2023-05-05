import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useContacts } from 'hooks/useContacts';
import { useEffect } from 'react';
import { fetchContacts } from 'Redux/contacts/Operations';
import { SkeletonList } from 'components';
import { Favorite } from 'components/elements';
import {
  ContactsContainer,
  List,
  ListItem,
  LinkStyled,
  ContainerAvatar,
  Avatar,
} from './contactList.styled';

export default function ContactList() {
  const { contacts, isLoading, filtredContacts } = useContacts();

  const dispatch = useDispatch();

  const location = useLocation();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleFavorite = () => {
    // const favorite = { favorite: !favorite };
    // dispatch(updateStatusContact({ id, favorite }));
  };

  return (
    <ContactsContainer>
      {isLoading && <SkeletonList />}
      {contacts.length > 0 && (
        <List>
          {filtredContacts.map(({ _id, name, avatarURL, favorite }) => {
            return (
              <ListItem key={_id}>
                <ContainerAvatar>
                  <Avatar src={avatarURL} alt="avatar" />
                </ContainerAvatar>
                <LinkStyled to={`/phonebook/${_id}`} state={{ from: location }}>
                  {name}
                </LinkStyled>
                <Favorite
                  favorite={favorite}
                  onFavoriteClick={handleFavorite}
                />
              </ListItem>
            );
          })}
        </List>
      )}
    </ContactsContainer>
  );
}
