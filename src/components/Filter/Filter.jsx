import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/contactsSlice';
import { selectFilter } from '../../redux/contactsSelectors';
import { FilterContainer, Label, Input } from './Filter.styled';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleFilterChange = value => {
    dispatch(changeFilter(value));
  };

  return (
    <FilterContainer>
      <Label htmlFor="filter">Find contacts by name</Label>
      <Input
        type="text"
        id="filter"
        value={filter}
        onChange={evt => handleFilterChange(evt.target.value)}
      />
    </FilterContainer>
  );
};

export default Filter;
