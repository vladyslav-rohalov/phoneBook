import { useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectIsLoading,
  selectStatus,
} from 'Redux/contacts/selectors';
import { selectFilter, selectFilteredContacts } from 'Redux/filter/selectors';

export const useContacts = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const filter = useSelector(selectFilter);
  const filtredContacts = useSelector(selectFilteredContacts);
  const error = useSelector(selectError);
  const status = useSelector(selectStatus);

  return {
    contacts,
    isLoading,
    filter,
    filtredContacts,
    error,
    status,
  };
};
