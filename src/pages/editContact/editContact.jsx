import { useDispatch, useSelector } from 'react-redux';
// import { useRef } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { selectContacts } from 'Redux/Selectors';
import { fetchContacts, editContact } from 'Redux/contacts/Operations';
import { useParams } from 'react-router-dom';
import { Container } from '../../components/elements/backdropContainer/backdropContainer.styled';
import 'react-toastify/dist/ReactToastify.css';
import ContactAddEdit from 'components/contactAddEdit/contactAddEdit';

export default function EditContact() {
  const items = useSelector(selectContacts);
  const { id } = useParams();
  const contact = items.find(item => item.id === id);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    // const email = form.elements.email.value;
    const contact = {
      id: id,
      name: name,
      number: number,
      // email: email,
    };
    dispatch(editContact(contact));
    navigate('/phonebook', { replace: true });
    form.reset();
  };

  return (
    <Container>
      {contact && (
        <ContactAddEdit
          title="Edit contact"
          titleButton="Edit contact"
          handleSubmit={handleSubmit}
          name={contact.name}
          phone={contact.number}
          // email={contact.email}
        />
      )}
    </Container>
  );
}
