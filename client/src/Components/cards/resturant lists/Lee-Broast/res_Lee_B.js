import React from 'react';
import {Link} from 'react-router-dom';
import { Card, CardTitle, CardText, CardActions } from 'react-mdl';
import lee from './images/lee.jpg';

class CardLeeBroast extends React.Component {


    render() {
        return (
            <div>
                <Card shadow={0} style={{ width: '320px', height: '320px', margin: 'auto' }}>
                    <CardTitle expand style={{ color: 'grey', backgroundImage: `url(${lee})` }}>
                        LEE BROAST
    </CardTitle>
                    <CardText>
                    Mutton Koyla Karahi | Chicken Koyla Karahi | Pizza |  Fast Food | Bar B Q | Chinese | Roll | Rice and Noodles | Paratha | Starters and Salads | Burgers | Desserts | Sides Orders | Beverages
    </CardText>
                    <CardActions border>
                    <Link to="/Lee-Broast">View Profile</Link>
                    </CardActions>
                </Card>
            </div>


        );
    }
}
export default CardLeeBroast;