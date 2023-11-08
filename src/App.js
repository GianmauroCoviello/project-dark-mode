import React, {useState} from "react";

const card = [
  {
    title: 'Magnam Facilis Autem',
    descript: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto'
  },
  {
    title: 'Magnam Facilis Autem',
    descript: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto'
  },
  {
    title: 'Magnam Facilis Autem',
    descript: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto'
  },
  {
    title: 'Magnam Facilis Autem',
    descript: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto'
  },
  {
    title: 'Magnam Facilis Autem',
    descript: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto'
  },
  {
    title: 'Magnam Facilis Autem',
    descript: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto'
  },
    
]
console.log(card)


function App() {

  let [title, descript] = card

  let [toggle, setToggle] = useState()

  return (
    <div className={toggle ? ('bg-dark trans') : ('trans')}>
      
      <div className="container  text-center">
        <button onClick={()=>setToggle(!toggle)} className="btn btn-primary mt-5">DARK MODE</button>
        <div className="row d-flex justify-content-center">
            <>
              { 
                card.map((el)=>{
                  let [title, descript] = card
                  let style = 'm-5 p-5  shadow'
                  return (
                    <div className="col-12 col-sm-12 col-lg-6">
                      <div className={`m-5 p-5  shadow ${toggle ? ('text-light opa') : ('')}` } >
                        <h3>{el.title}</h3>
                        <p>{el.descript}</p>
                      </div>
                      
                    </div>
                  )
                
                })
              }
            
            </>
            

        </div>
       

      </div>
      
      
    </div>
  );
}


function Cards() {
 
  return(
    <>
      { 
        card.map((el)=>{
           let [title, descript] = card
          return (
            <div className="col-6">
              <div className="m-5 p-5  shadow">
                <h3>{el.title}</h3>
                <p>{el.descript}</p>
              </div>
              
            </div>
          )
        
        })
      }
    
    </>
   
  ) 
 
  
}



export default App;
