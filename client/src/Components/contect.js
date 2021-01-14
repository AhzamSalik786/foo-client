import React from 'react';

class Contect extends  React.Component{
    
    render(){
        return(
            <div>
                <h1>CONTECT</h1>
            </div>
        )
    }
}
export default Contect;



// import React from 'react';
// import './search.css';
// import { useState } from 'react';
// import CardAlBasit from './cards/resturant lists/Al-Basit/res_A_B';
// import CardKingBroast from './cards/resturant lists/King-Broast/res_k_b';
// import CardLuckyBroast from './cards/resturant lists/Lucky-Broast/res_L_B';
// import CardLeeBroast from './cards/resturant lists/Lee-Broast/res_Lee_B';

// function SearchBox(){
//     const [searchTerm, setSearchTerm ] = useState(' ');
            
//         var arr = [{ "first_name": "Bar B Q  Pakistani , Chinese , Burgers , Sandwiches , Broasts", res : <CardAlBasit /> },
//          { "first_name": "Bar B Q , Pakistani , Chinese , Burgers , Sandwiches , Broasts , Pizza , Wrap , Pasta , Fried Items , Sides Beverages" , res : <CardKingBroast /> },
//           { "first_name": "Fast Food , Burgers , Sandwich , ice Cream , Sides , Beverages", res : <CardLuckyBroast/> },
//           { "first_name": "Mutton Koyla Karahi , Chicken Koyla Karahi , Pizza , Fast Food , Bar B Q , Chinese , Roll , Rice and Noodles , Paratha , Starters and Salads , Burgers , Desserts , Sides Orders , Beverages", res : <CardLeeBroast/> },];
//         return (
//             <div className="Searchbox">
//                 <input
//                     type="text"
//                     placeholder="Search..."
//                     onChange={event => { setSearchTerm(event.target.value) }} />
                    
//                 {arr.filter((val) => {
//                     if(searchTerm === " "){
//                         return val.res
//                     } else if(val.first_name.toLowerCase().includes(searchTerm.toLowerCase())) {
//                         return val.res
//                     }
//                 }).map((val, key) => {
//                     return (
//                         <div className="user" key={key}>
//                             <p>{val.res}</p>
                            
//                         </div>
//                     );
//                 })}

//             </div>
//         );
// }
// export default SearchBox;