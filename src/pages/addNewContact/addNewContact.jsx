import { useDispatch } from 'react-redux';
import { useEffect, useRef } from 'react';
import { useContacts } from 'hooks/useContacts';
import { useNavigate } from 'react-router-dom';
import contactsOperations from 'Redux/contacts/operations';
import { Container } from 'components/elements';
import { Toaster } from 'react-hot-toast';
import { notifyError, notifySucces } from 'helpers/notify';
import { ContactAddEdit } from 'components';

export default function AddNewContact() {
  const { error, status } = useContacts();
  const avatarPicker = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (error?.status >= 400) notifyError(error.message);
    if (status === 201) {
      notifySucces('new contact added');
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
    dispatch(contactsOperations.addContact(formData));
  };

  const handlePick = () => {
    avatarPicker.current.click();
  };

  return (
    <Container>
      <Toaster />
      <ContactAddEdit
        title="Add new contact"
        titleButton="Add contact"
        handleSubmit={handleSubmit}
        handlePick={handlePick}
        avatarPicker={avatarPicker}
      />
    </Container>
  );
}
