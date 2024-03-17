import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';
import { useSelector } from 'react-redux';
import { selectError, selectIsLoading } from '../../redux/contactsSelectors';

export default function App() {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && <div>Loading...</div>}
      {error}
      <ContactList />
    </div>
  );
}
