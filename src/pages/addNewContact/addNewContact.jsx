import { useDispatch } from 'react-redux';
import { useEffect, useRef } from 'react';
import { useContacts } from 'hooks/useContacts';
import { useNavigate } from 'react-router-dom';
import { addContact } from 'Redux/contacts/Operations';
import { Container } from '../../components/elements/backdropContainer/backdropContainer.styled';
import { Toaster } from 'react-hot-toast';
import { notifyError, notifySucces } from 'helpers/notify';
import ContactAddEdit from 'components/contactAddEdit/contactAddEdit';

export default function AddNewContact() {
  const { error, status } = useContacts();
  const avatarPicker = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (error.status >= 400) notifyError(error.message);
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
    // const name = form.elements.name.value;
    // const phone = form.elements.phone.value;
    // const email = form.elements.email.value;
    // const avatarURL = form.elements.avatar.files[0];
    const formData = new FormData();
    formData.append('avatar', form.elements.avatar.files[0]);
    formData.append('name', form.elements.name.value);
    formData.append('phone', form.elements.phone.value);
    formData.append('email', form.elements.email.value);
    // const contact = {
    //   name: name,
    //   phone: phone,
    //   email: email,
    // };
    dispatch(addContact(formData));
    // dispatch(addContact(contact));
    // form.reset();
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
