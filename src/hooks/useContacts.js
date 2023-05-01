import { useSelector } from 'react-redux';
import {
  selectContacts,
  selectIsLoading,
  selectError,
  selectFilter,
  selectFilteredContacts,
  selectStatus,
} from 'Redux/Selectors';

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
