import React from 'react';
import './res.css';
import { Card, CardTitle, CardText, CardActions} from 'react-mdl';
import {Link} from 'react-router-dom';
import albasit from './images/albasit.jpg';
class CardAlBasit extends React.Component {


    render() {
        return (
            <div>



                <Card shadow={0} style={{ width: '320px', height: '320px', margin: 'auto' }}>
                    <CardTitle expand style={{ color: 'grey', backgroundImage: `url(${albasit})` }}>
                        AL-BASIT
        </CardTitle>
                    <CardText>
                        Bar B Q | Pakistani | Chinese | Burgers | Sandwiches | Broasts
    </CardText>
                    <CardActions border>
                    <Link to="/Al-Basit">View Profile</Link>
                        
                    </CardActions>
                </Card>
            </div>
        )
    }
}
export default CardAlBasit;