import React from 'react'

function CardOrder({items, removeItem}) {

  
    
  return (
    <div className='row justify-content-center'>  
            {items.map(order => (
    
                <div key={order.id} className="col-xl-5 col-11 m-3   shadow ">
                    <div className='d-flex justify-content-end'>
                      <button style={{borderRadius:'50%'}} className='btn btn-danger mt-2' onClick={() => removeItem(order.id)}><strong>X</strong></button> 
                    </div>
                   
                    <div className='p-5 text-center'>
                    
                            <img className='pb-3' src='https://tse4.mm.bing.net/th?id=OIP.wpw6lxlMqeqPjHL_A7vCmwHaEo&pid=Api&P=0&h=180' width={'150px'} style={{borderRadius: '50%'}}/>        
                            <h3>{order.name}</h3>
                            
                            <p>{order.street}</p>
                            <h4>{order.price}  $</h4>

                            <button className="btn btn-success "><a className="text-light no-dec" href={`https://www.google.it/maps/place/${order.street}+Lavello`} >raggiungi</a></button>
                    </div>
                        
                        
                </div>
    
            ))}
        
    </div>
  )
}

export default CardOrder