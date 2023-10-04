import './components.scss';
import { useSelector, useDispatch } from 'react-redux';
import { clearNotification } from '../actions/customer.js';
import { useEffect } from 'react';

const Home = () => {
    const notification = useSelector(state => state.notification);
    const dispatch = useDispatch();

    return (
        <h1 id="center">Welcome to the WB Wood CRM</h1> //dd Rev1 
    )
}

export default Home;