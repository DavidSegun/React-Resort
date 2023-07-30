import React from 'react';
import { useContext } from 'react';
import { RoomContext } from '../context';
import Title from '../components/Title';

const getUnique = (items, value) => {
  // Set() retains new values only
  return [...new Set(items.map((item) => item[value]))];
};
function RoomsFilter({ rooms }) {
  const context = useContext(RoomContext);
  const {
    handleChange,
    // type,
    // capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
  } = context;

  // get unigue types
  let types = getUnique(rooms, 'type');
  // add all as a type by coping the array and adding all to it using spread

  types = ['all', ...types];

  let people = getUnique(rooms, 'capacity');

  return (
    <section className='filter-container'>
      <Title title='search rooms' />
      <form className='filter-form'>
        <div className='form-group'>
          <label htmlFor='type'>room type</label>
          <select
            name='type'
            id='type'
            onChange={handleChange}
            className='form-control'>
            {
              (types = types.map((item, index) => {
                return (
                  <option value={item} key={index}>
                    {item}
                  </option>
                );
              }))
            }
          </select>
        </div>
        {/* CAPACITY */}
        <div className='form-group'>
          <label htmlFor='capacity'>Guests capacity</label>
          <select
            name='capacity'
            id='capacity'
            onChange={handleChange}
            className='form-control'>
            {
              (people = people.map((item, index) => {
                return (
                  <option value={item} key={index}>
                    {item}
                  </option>
                );
              }))
            }
          </select>
        </div>
        {/* PRICE */}
        <div className='form-group'>
          <label htmlFor='price'>room price ${price}</label>
          <input
            type='range'
            name='price'
            id='price'
            value={price}
            min={minPrice}
            max={maxPrice}
            onChange={handleChange}
            className='form-control'
          />
        </div>
        {/* {SIZE} */}
        <div className='form-group'>
          <label htmlFor='size'>room size</label>
          <div className='size-inputs'>
            <input
              type='number'
              name='minSize'
              id='size'
              onChange={handleChange}
              value={minSize}
              className='size-input'
            />
            <input
              type='number'
              name='maxSize'
              id='size'
              onChange={handleChange}
              value={maxSize}
              className='size-input'
            />
          </div>
        </div>
        {/* EXTRAS */}
        <div className='form-group'>
          <div className='single-extra'>
            <input
              type='checkbox'
              name='breakfast'
              checked={breakfast}
              id='breakfast'
              onChange={handleChange}
            />
            <label htmlFor='breakfast'>breakfast</label>
          </div>
          <div className='single-extra'>
            <input
              type='checkbox'
              name='pets'
              checked={pets}
              id='pets'
              onChange={handleChange}
            />
            <label htmlFor='pets'>pets</label>
          </div>
        </div>
      </form>
    </section>
  );
}

export default RoomsFilter;
