import { useDispatch } from 'react-redux';
import { useRef } from 'react';
import { useContacts } from 'hooks/useContacts';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchContacts, editContact } from 'Redux/contacts/Operations';
import { useParams } from 'react-router-dom';
import { Container } from 'components/elements/';
import { Toaster } from 'react-hot-toast';
import { notifyError, notifySucces } from 'helpers/notify';
import { ContactAddEdit } from 'components';

export default function EditContact() {
  const dispatch = useDispatch();
  const { error, status } = useContacts();
  const { id } = useParams();
  const { contacts } = useContacts();
  const contact = contacts.find(item => item._id === id);
  const navigate = useNavigate();
  const avatarPicker = useRef(null);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    if (error?.status >= 400) notifyError(error.message);
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
    const formData = new FormData();
    formData.append('avatar', form.elements.avatar.files[0]);
    formData.append('name', form.elements.name.value);
    formData.append('phone', form.elements.phone.value);
    formData.append('email', form.elements.email.value);
    dispatch(editContact({ formData, id }));
  };

  const handlePick = () => {
    avatarPicker.current.click();
  };

  return (
    <Container>
      {error?.message !== null && <Toaster />}
      {contact && (
        <ContactAddEdit
          title="Edit contact"
          titleButton="Edit contact"
          handleSubmit={handleSubmit}
          name={contact.name}
          phone={contact.phone}
          email={contact.email}
          handlePick={handlePick}
          avatarPicker={avatarPicker}
        />
      )}
    </Container>
  );
}
