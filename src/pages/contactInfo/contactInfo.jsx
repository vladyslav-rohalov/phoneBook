import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectContacts, selectError } from 'Redux/Selectors';
import { useEffect } from 'react';
import { fetchContacts, delContact } from 'Redux/contacts/Operations';
import { Container } from '../../components/elements/backdropContainer/backdropContainer.styled';
import IconBar from 'components/iconBar/iconBar';
import Error from 'components/error/error';
import {
  ContactContainer,
  ContactDetails,
  // ContactAvatar,
  ContactName,
  ContactPhoneMail,
} from './contactInfo.styled';

export default function ContactInfo() {
  const items = useSelector(selectContacts);
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  const { id } = useParams();
  const contact = items.find(item => item.id === id);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <ContactContainer>
        {error && <Error />}
        {contact && (
          <ContactDetails>
            {/* <ContactAvatar src={contact.avatar} alt="avatar" /> */}
            <ContactName>{contact.name}</ContactName>
            <ContactPhoneMail>{contact.number}</ContactPhoneMail>
            {/* <ContactPhoneMail>{contact.email}</ContactPhoneMail> */}
            <IconBar
              contact={contact}
              onDelClick={() => dispatch(delContact(id))}
              id={id}
            />
          </ContactDetails>
        )}
      </ContactContainer>
    </Container>
  );
}
