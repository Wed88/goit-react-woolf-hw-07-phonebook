import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/contactsSlice';
import { getFilter } from '../../redux/contactsSelectors';
import { FilterContainer, Label, Input } from './Filter.styled';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleFilterChange = event => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <FilterContainer>
      <Label htmlFor="filter">Find contacts by name</Label>
      <Input
        type="text"
        id="filter"
        value={filter}
        onChange={handleFilterChange}
      />
    </FilterContainer>
  );
};

export default Filter;
