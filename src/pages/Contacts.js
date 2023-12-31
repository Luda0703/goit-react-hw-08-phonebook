import { ContactForm } from '../components/ContactForm/ContactForm';
import { Filter } from '../components/Filter/Filter';
import { ContactList } from '../components/ContactList/ContactList';
import { Container, H1, H2 } from './Container.styled';
import {getIsLoading, getError} from '../Redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'Redux/contactsFetch';
import { useDispatch, useSelector } from 'react-redux';

export default function Contacts() {
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <H1>Phonebook</H1>
      <ContactForm />
      <H2>Contacts </H2>
      <Filter />
      <ContactList />
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
    </Container>
  );
}