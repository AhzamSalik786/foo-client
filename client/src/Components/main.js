import React from 'react';
import { Switch , Route } from 'react-router-dom';
import LangingPage from './landingPage';
import Login from './login';
import Contect from './contect';
import al_b_profile from './cards/resturant lists/Al-Basit/al_B_profile';
import KingBroastProfile from './cards/resturant lists/King-Broast/k_b_profile';
import LeeBroastProfile from './cards/resturant lists/Lee-Broast/lee_broast_profile';
import LuckyBroastProfile from './cards/resturant lists/Lucky-Broast/lucky_broast_profile';


const Main = () => (
    <Switch>
        <Route exact path="/" component={LangingPage} />
        <Route path="/login" component ={Login} />
        <Route path="/contect" component ={Contect} />
        <Route path="/Al-Basit" component ={al_b_profile} />
        <Route path="/King-broast" component ={KingBroastProfile} />
        <Route path="/Lee-Broast" component ={LeeBroastProfile} />
        <Route path="/Lucky-Broast" component ={LuckyBroastProfile} />
        
    </Switch>
)
export default Main;