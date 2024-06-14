import React, { useState } from 'react';

const FormOrderComponent = ({ items, addItem }) => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    street: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      id: items.length + 1,
      ...formData,
      price: parseFloat(formData.price)
     
      
      
      
    };
    if (formData.price === '') {
      newItem.price = 'importo non inserito '
      
    }

    addItem(newItem);
    
    // 

    setFormData({
      name: '',
      price: '',
      street: ''
    });
  };

  return (
    <div className='row justify-content-center mb-5'>
        <div className='col-xl-6 col-11 my-3  border-form p-3'>
                <h2 className='pb-4 european-blu text-center'>Aggiungi una nuova ordinazione</h2>
                


                <form className='px-2'  onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className='pe-3 european-blu'  htmlFor="name"><strong>Nome</strong></label>
                        <input
                          className='form-control'
                          placeholder='inserisci il nome del ordine'
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                        />                    
                    
                  </div>
                  <div className='mb-3'>
                    <label className='pe-3 european-blu'  htmlFor="price"><strong>Prezzo</strong></label>
                    <input
                      className='form-control'
                      placeholder='inserisci importo'
                      type="number"
                      id="price"
                      name="price"
                      value={formData.price}
                      onChange={handleInputChange}
                      required
                    />                    
                        
                    
                  </div>
                  <div>
                    <label className='pe-3 european-blu'  htmlFor="street"><strong>Via</strong></label>
                    <input
                      className='form-control'
                      placeholder='inserisci la via'
                      type="text"
                      id="street"
                      name="street"
                      value={formData.street}
                      onChange={handleInputChange}
                      required
                    />                    
                    
                  </div>
                  
                  <div className='d-flex justify-content-center'>
                    <button type="submit" className=" european-background-blue mt-4">Submit</button>
                  </div>
                  
                  
              </form>     
                         
                
        </div>    
            
    </div>
  );
};

export default FormOrderComponent;
