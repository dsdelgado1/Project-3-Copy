import './components.scss';
import { useSelector, useDispatch } from 'react-redux';
import { clearNotification } from '/actions';

const Home = () => {
    const notification = useSelector(state => state.notification);
    const dispatch = useDispatch();
  
    useEffect(() => {
      if (notification) {
        // Display the notification however you prefer
        alert(notification);
  
        // Clear the notification
        dispatch(clearNotification());
      }
    }, [notification, dispatch]);
    return (
        <h1 id="center">Welcome to the WB Wood CRM</h1> //dd Rev1 
    )
}

export default Home;