import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useContacts } from 'hooks/useContacts';
import { useEffect } from 'react';
import {
  fetchContacts,
  delContact,
  updateStatusContact,
} from 'Redux/contacts/Operations';
import { Container } from '../../components/elements/backdropContainer/backdropContainer.styled';
import IconBar from 'components/iconBar/iconBar';
// import Error from 'components/error/error';
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

  // const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleFavorite = () => {
    const favorite = { favorite: !contact.favorite };
    dispatch(updateStatusContact({ id, favorite }));
  };

  return (
    <Container>
      <ContactContainer>
        {/* {error && <Error />} */}
        {contact && (
          <ContactDetails>
            <ContactAvatar src={contact.avatarURL} alt="avatar" />
            <ContactName>{contact.name}</ContactName>
            <ContactPhoneMail>{contact.phone}</ContactPhoneMail>
            <ContactPhoneMail>{contact.email}</ContactPhoneMail>
            <IconBar
              contact={contact}
              onDelClick={() => dispatch(delContact(id))}
              onFavoriteClick={handleFavorite}
              id={id}
            />
          </ContactDetails>
        )}
      </ContactContainer>
    </Container>
  );
}
