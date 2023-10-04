import { withReduxStateSync } from 'redux-state-sync';
import notificationReducer from './notificationReducer';
import { combineReducers } from 'redux';
import customerReducer from './customerreducer';
import workerReducer from './workerreducer';
import workerCustomerReducer from './workercustomerreducer';
import errorReducer from './errorreducer';
import calendarReducer from './calendarreducer';
import { useSelector, useDispatch } from 'react-redux';
import 

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
export default withReduxStateSync(combineReducers({ customers: customerReducer, workers: workerReducer, workerCustomers: workerCustomerReducer, errors: errorReducer, calendar: calendarReducer }))