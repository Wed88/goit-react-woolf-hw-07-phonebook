import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/thunk';
import { Item, Text, Button } from './ContactItem.styled';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <Item>
      <Text>
        {name}: {number}
      </Text>
      <Button type="button" onClick={() => handleDeleteContact(id)}>
        Delete
      </Button>
    </Item>
  );
};

export default ContactItem;
