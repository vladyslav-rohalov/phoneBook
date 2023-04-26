import { useDispatch, useSelector } from 'react-redux';
// import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { selectContacts } from 'Redux/Selectors';
import { addContact } from 'Redux/contacts/Operations';
import { Container } from '../../components/elements/backdropContainer/backdropContainer.styled';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactAddEdit from 'components/contactAddEdit/contactAddEdit';

export default function AddNewContact() {
  const items = useSelector(selectContacts);
  // const avatarPicker = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const phone = form.elements.number.value;
    // const email = form.elements.email.value;
    // const avatar = form.elements.avatar.files[0];
    // const formData = new FormData();
    // formData.append('avatar', avatar);

    const contact = {
      name: name,
      number: phone,
      // email: email,
      // avatar: formData,
    };
    console.log(contact);
    twinCheck(name, contact);
    form.reset();
  };

  const twinCheck = (newContactName, contact) => {
    let isTwin = items.find(prevContact => {
      if (prevContact.name === newContactName) {
        toast.warn('This contact already exists', {
          position: toast.POSITION.TOP_CENTER,
        });
        return true;
      }
      return false;
    });
    if (!isTwin) {
      dispatch(addContact(contact));
      navigate('/phonebook', { replace: true });
    }
    isTwin = false;
  };

  // const handlePick = () => {
  //   avatarPicker.current.click();
  // };

  return (
    <Container>
      <ToastContainer />
      <ContactAddEdit
        title="Add new contact"
        titleButton="Add contact"
        handleSubmit={handleSubmit}
        // handlePick={handlePick}
        // avatarPicker={avatarPicker}
      />
    </Container>
  );
}
