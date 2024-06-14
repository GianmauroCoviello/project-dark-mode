import React, {useState} from "react";
import EuropeoHeader from "./EuropeoHeader";
import ItemGestionComponent from "./ItemGestionComponent";

// const card = [
//   {
//     id: 0,
//     title: 'Ordine Pinnetti',
//     descript: '3x Capri, 2x Marghe',
//     via: 'Via Roma 5',

//     map: <div className="pb-5"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.0806514357123!2d15.788634583276304!3d41.04536534327203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13384cb96e279957%3A0x2aca40fc67e21c41!2sEuropeo!5e0!3m2!1sit!2sit!4v1717754439061!5m2!1sit!2sit" width="450" height="450" style={{border:0, borderRadius:'50%'}}  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>,
//     price:15
//   },
//   {
//     id: 1,
//     title: 'Ordine Pinnetti',
//     descript: '3x Capri, 2x Marghe',
//     via: 'Via Roma 5',
//     map: <div className="pb-5"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.0806514357123!2d15.788634583276304!3d41.04536534327203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13384cb96e279957%3A0x2aca40fc67e21c41!2sEuropeo!5e0!3m2!1sit!2sit!4v1717754439061!5m2!1sit!2sit" width="100%" height='444px' style={{border:0, borderRadius:'50%'}}  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>,
//     price: 32

//   },
//   {
//     id: 2,
//     title: 'Ordine Pinnetti',
//     descript: '3x Capri, 2x Marghe',
//     via: 'Via Roma 5',
//     map: <div className="pb-5"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.0806514357123!2d15.788634583276304!3d41.04536534327203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13384cb96e279957%3A0x2aca40fc67e21c41!2sEuropeo!5e0!3m2!1sit!2sit!4v1717754439061!5m2!1sit!2sit" width="450" height="450" style={{border:0, borderRadius:'50%'}}  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>,
//     price: 38
//   },
  
    
// 
function App() {

 
  return (

    <div className="pb-5">
      <EuropeoHeader/>
      <ItemGestionComponent></ItemGestionComponent>
    </div>
    
  );
}






export default App;
