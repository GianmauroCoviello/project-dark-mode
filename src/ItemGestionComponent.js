import React, { useState, useEffect } from 'react';
import FormOrderComponent from './FormOrderComponent';
import CardOrder from './CardOrder';

const FormComponent = () => {
  // const [items, setItems] = useState([
  //   { 
  //       id: 1, 
  //       name: 'Oggetto 1',
  //       price: 10,
  //       street: 'Via Roma 6, Lavello' 
  //   },
  //   { 
  //       id: 2, 
  //       name: 'Oggetto 2',
  //       price: 20, 
  //       street: 'Via Milano 9, rionero' 
  //   }
  // ]);

  const loadItems = () => {
    const savedItems = localStorage.getItem('items');
    return savedItems ? JSON.parse(savedItems) : [
      { id: 1, name: 'Oggetto 1', price: 10, street: 'Via Roma' },
      { id: 2, name: 'Oggetto 2', price: 20, street: 'Via Milano' }
    ];
  };
  
  const [items, setItems] = useState(loadItems);

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  const addItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const removeItem = (id) => {
    const updatedItems = items.filter(item => item.id !== id);
    setItems(updatedItems);
  };

  return (
    <div className='container'>
        
        <FormOrderComponent items={items} addItem={addItem}  />
        <CardOrder items={items} removeItem={removeItem}></CardOrder>
 
    </div>
  );
};

export default FormComponent;
