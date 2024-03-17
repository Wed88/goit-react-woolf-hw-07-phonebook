import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  selectContactsItems,
  selectFilter,
} from '../../redux/contactsSelectors';
import { fetchContacts } from '../../redux/thunk';
import ContactItem from '../ContactItem/ContactItem';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContactsItems);
  const filter = useSelector(selectFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const visibledContacts = () => {
    if (!filter.trim()) {
      return contacts;
    }

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  };

  return (
    <>
      {visibledContacts().length > 0 && (
        <ul>
          {visibledContacts().map(contact => (
            <ContactItem
              key={contact.id}
              id={contact.id}
              name={contact.name}
              number={contact.phone}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default ContactList;
