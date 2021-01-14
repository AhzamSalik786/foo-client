import React from 'react';
import './k_b.css';
import {Card, CardTitle, CardText,CardActions} from 'react-mdl';
import {Link} from 'react-router-dom';
import car from './images/car.jpg';

class CardKingBroast extends React.Component{
    

    render(){
        return(
            <div>
          <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
    <CardTitle expand style={{
    color : 'grey',
     backgroundImage:`url(${car})` }}>
        KING BROAST
        </CardTitle>
    <CardText>
    Bar B Q | Pakistani | Chinese | Burgers | Sandwiches | Broasts | Pizza | Wrap | Pasta | Fried Items | Sides Beverages
       </CardText>
    <CardActions border>
    <Link to="/King-broast">View Profile</Link>
    </CardActions>
</Card>
            </div>
           
        
        );
    }
}
export default CardKingBroast ;