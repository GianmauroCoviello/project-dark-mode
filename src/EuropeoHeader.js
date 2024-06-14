import React from 'react';
import Logo from './img/logo-Europeo.jpg'

function EuropeoHeader() {
  return (
    <div className='container py-3'>
        <div className='row'>
            
            <div className='col-12 d-flex justify-content-center'>
                <img style={{borderRadius:'40px', width:'300px'}} src={Logo}/>
                
            </div>
            <h1 className='text-center px-2 gwendolyn-bold '>Benvenuto nel gestionale delle consegne</h1>
        </div>
        
        
    </div>
  )
}

export default EuropeoHeader