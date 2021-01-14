import React from 'react';
import {Link} from 'react-router-dom';
import { Card, CardTitle, CardText, CardActions} from 'react-mdl';
import luckybroast from './images/luckybroast.jpg';

class CardLuckyBroast extends React.Component {


    render() {
        return (
            <div>
                <Card shadow={0} style={{ width: '320px', height: '320px', margin: 'auto' }}>
                    <CardTitle expand style={{ color: 'grey', backgroundImage: `url(${luckybroast})` }}>
                        LUCKY BROAST
    </CardTitle>
                    <CardText>
                        Fast Food | Burgers | Sandwich | ice Cream | Sides | Beverages
    </CardText>
                    <CardActions border>
                    <Link to="/Lucky-Broast">View Profile</Link>
                    </CardActions>
                </Card>
            </div>


        );
    }
}
export default CardLuckyBroast;