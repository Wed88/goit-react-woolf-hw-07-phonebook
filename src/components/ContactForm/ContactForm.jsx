import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import shortid from 'shortid';
import { Form, Label, Input, ButtonSubmit } from './ContactForm.styled';
import { addContact } from '../../redux/contactsSlice';
import { getContacts } from '../../redux/contactsSelectors';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const nameImputId = shortid.generate();
  const numberImputId = shortid.generate();

  const hendleImputChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const onSubmitContact = newContact => {
    const compareContact = contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    compareContact
      ? alert(`${newContact.name} is already in contacts`)
      : dispatch(addContact(newContact));
  };

  const hendleSubmit = event => {
    event.preventDefault();

    const newContact = {
      id: shortid.generate(),
      name: name,
      number: number,
    };

    onSubmitContact(newContact);

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={hendleSubmit}>
      <Label htmlFor={nameImputId}>Name</Label>
      <Input
        type="text"
        name="name"
        value={name}
        onChange={hendleImputChange}
        id={nameImputId}
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <Label htmlFor={numberImputId}>Number</Label>
      <Input
        type="tel"
        name="number"
        value={number}
        onChange={hendleImputChange}
        id={numberImputId}
        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />

      <ButtonSubmit type="submit">Add contact</ButtonSubmit>
    </Form>
  );
}
