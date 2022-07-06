import React from 'react';
import { Input, Dropdown } from 'components/primitives/Input';
import { ORDER_DATE, ORDER_NAME } from 'constants/filters';
import { useAnimals } from 'context/AnimalContext';
import { debounce } from 'utils/helpers';

const Filter = () => {
  const { filters, setFilters: updateFilter } = useAnimals();

  const onRegionUpdate = (e) => {
    debounce(updateFilter('region'), 1000)(e);
  };

  return (
    <div className="filter-container">
      <Input
        label={'Filter by Region'}
        onUpdate={onRegionUpdate}
        placeholder={'Region'}
      />
      <Dropdown
        onUpdate={updateFilter('orderDate')}
        defaultValue={filters.orderDate}
        label="Lost Date Order"
        choices={ORDER_DATE}
      />
      <Dropdown
        onUpdate={updateFilter('orderNames')}
        defaultValue={filters.orderNames}
        label="Name Order"
        choices={ORDER_NAME}
      />
    </div>
  );
};

export default Filter;
