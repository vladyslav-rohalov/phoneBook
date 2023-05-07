import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useContacts } from 'hooks/useContacts';
import { useEffect } from 'react';
import contactsOperations from 'Redux/contacts/operations';
import { Container } from '../../components/elements';
import { IconBar } from 'components';
import {
  ContactContainer,
  ContactDetails,
  ContactAvatar,
  ContactName,
  ContactPhoneMail,
} from './contactInfo.styled';

export default function ContactInfo() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { contacts } = useContacts();
  const contact = contacts.find(item => item._id === id);

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  const handleFavorite = () => {
    const favorite = { favorite: !contact.favorite };
    dispatch(contactsOperations.updateStatusContact({ id, favorite }));
  };

  return (
    <Container>
      <ContactContainer>
        {contact && (
          <ContactDetails>
            <ContactAvatar src={contact.avatarURL} alt="avatar" />
            <ContactName>{contact.name}</ContactName>
            <ContactPhoneMail>{contact.phone}</ContactPhoneMail>
            <ContactPhoneMail>{contact.email}</ContactPhoneMail>
            <IconBar
              contact={contact}
              onDelClick={() => dispatch(contactsOperations.delContact(id))}
              onFavoriteClick={handleFavorite}
              id={id}
            />
          </ContactDetails>
        )}
      </ContactContainer>
    </Container>
  );
}
