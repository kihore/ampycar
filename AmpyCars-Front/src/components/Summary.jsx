import React from 'react';
import "./summary.css";

const ride = {
    cartitle:"Car type :  Maruti swift",
    cartype:"Geartype : Manual",
    carfuel:"fueltype :  petrol",
    startdate:"Tue, 11 dec, 12:00am",
    enddate:"web, 15 dec 06:30pm",
    deliverypoint:"Ekatuthangal",
    tripPrice:"Rs: 13,712"
}


export default function BookingSummary() {

    const successpage = ()=>{
        console.log("successfully checkout...")
    }

    return (
        <div className='summary_container'>
           <div className='summary_card'> 
            <div className=''>
             <p className='car_name'>   
            {  ride.cartitle}</p>
             <div className='vechile_type'>
                 <p>{ride.cartype}</p>
                 <p>{ride.carfuel}</p>
             </div>
             <div className='trip_dates'>
                 <p>
                     Starting point {ride.startdate}
                 </p>
                 <p>
                     Ending point {ride.enddate}
                 </p>
             </div>
             <div className='delivery point'>
                 <p>
                     Delivery point {ride.deliverypoint}
                 </p>
             </div>
             <div className='price_chart'>
                 <p className='price'>
                     {ride.tripPrice}
                 </p>
                 <button className='checkout_btn' onClick={successpage}>Checkout SUmmary</button>
             </div>
            </div>
        </div></div>
    )
}
