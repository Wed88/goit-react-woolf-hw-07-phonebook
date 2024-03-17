import { useSelector, useDispatch } from 'react-redux';
import { selectContactsItems } from '../../redux/contactsSelectors';
import { addContact } from '../../redux/thunk';
import { Form, Label, Input, ButtonSubmit } from './ContactForm.styled';

export default function ContactForm() {
  const contacts = useSelector(selectContactsItems);
  const dispatch = useDispatch();

  const addNewContact = contact => {
    if (hasContact(contact.name)) {
      alert(`${contact.name} is already in contacts.`);
      return false;
    }

    dispatch(addContact(contact));
    return true;
  };

  const hasContact = name => {
    return contacts.find(
      contact => contact.name.toLowerCase().trim() === name.toLowerCase().trim()
    );
  };

  const hendleSubmit = event => {
    event.preventDefault();
    const form = event.target;

    const newContact = {
      name: form.name.value,
      phone: form.number.value,
    };

    const isAddNewContact = addNewContact(newContact);

    if (isAddNewContact) {
      form.reset();
    }
  };

  return (
    <Form onSubmit={hendleSubmit}>
      <Label htmlFor="name">Name</Label>
      <Input
        type="text"
        name="name"
        id="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <Label htmlFor="number">Number</Label>
      <Input
        type="tel"
        name="number"
        id="number"
        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />

      <ButtonSubmit type="submit">Add contact</ButtonSubmit>
    </Form>
  );
}
