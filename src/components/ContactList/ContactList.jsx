import { useSelector } from 'react-redux';
import { getVisibleContacts } from '../../redux/contactsSelectors';
import ContactItem from '../ContactItem/ContactItem';

const ContactList = () => {
  const visibledContacts = useSelector(getVisibleContacts);

  return (
    <>
      {visibledContacts.length > 0 && (
        <ul>
          {visibledContacts.map(({ id, name, number }) => (
            <ContactItem key={id} id={id} name={name} number={number} />
          ))}
        </ul>
      )}
    </>
  );
};

export default ContactList;
