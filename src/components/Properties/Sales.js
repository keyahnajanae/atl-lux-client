import React from 'react';
import Sale from '../Dev/Sales/Sale'
import Dev from '../Dev/Dev'
import Subscribe from '../Suscribe/suscribe'



const Sales = (props) => {
   
    // function generateSales(forSale) {
    //     return forSale.map(sale => {
    //         return <h3>{sale.title}</h3>
    //     })
    // }
  
    return (
        <>
         <Sale />
         <Dev />
         <Subscribe/>
        {/* <div className='container'>
            {generateSales(props.data)}
        </div> */}
      
       
        </>
    )
}

export default Sales;