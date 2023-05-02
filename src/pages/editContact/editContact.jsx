import { useDispatch } from 'react-redux';
import { useRef } from 'react';
import { useContacts } from 'hooks/useContacts';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchContacts, editContact } from 'Redux/contacts/Operations';
import { useParams } from 'react-router-dom';
import { Container } from '../../components/elements/backdropContainer/backdropContainer.styled';
import { Toaster } from 'react-hot-toast';
import { notifyError, notifySucces } from 'helpers/notify';
import ContactAddEdit from 'components/contactAddEdit/contactAddEdit';

export default function EditContact() {
  const dispatch = useDispatch();
  const { error, status } = useContacts();
  const { id } = useParams();
  const { contacts } = useContacts();
  const contact = contacts.find(item => item._id === id);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    if (error.status >= 400) notifyError(error.message);
    if (status === 201) {
      notifySucces('Contact updated successfully');
      setTimeout(() => {
        navigate('/phonebook', { replace: true });
      }, 1000);
    }
  }, [error, status, navigate]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const phone = form.elements.phone.value;
    const email = form.elements.email.value;
    const contact = {
      id: id,
      name: name,
      phone: phone,
      email: email,
    };
    dispatch(editContact(contact));
    // form.reset();
  };

  return (
    <Container>
      <Toaster />
      {contact && (
        <ContactAddEdit
          title="Edit contact"
          titleButton="Edit contact"
          handleSubmit={handleSubmit}
          name={contact.name}
          phone={contact.phone}
          email={contact.email}
        />
      )}
    </Container>
  );
}
