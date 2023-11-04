import { getCustomers } from './actions/customer.js';
import { getWorkers } from './actions/worker';
import { Routes, Route } from 'react-router-dom';
import { getWorkerCustomers } from './actions/workercustomer';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { PageLayout } from "./components/PageLayout";
import { lazy, Suspense } from 'react';
import './App.css';
import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import { getRoleFromToken, getWorkerIdFromToken } from './utils/tokenUtils.js';


const Index = lazy(() => import('./components/customer/customer_index.js'));
const NewCustomer = lazy(() => import('./components/customer/new.js'));
const Show = lazy(() => import('./components/customer/show.js'));
const Search = lazy(() => import('./components/customer/search.js'));
// const AddWorkerToCustomer = lazy(() => import('./components/customer/add_worker.js'));
// const NewWorker = lazy(() => import('./components/worker/new.js'));
// const OutlookCalendarDisplay = lazy(() => import('./components/calendar/calendarDisplay.js'));
// const OutlookCalendarEventCreate = lazy(() => import('./components/calendar/createEvent.js'));
const Home = lazy(() => import('./components/home.js'));

const App = () => {
  const { instance, accounts } = useMsal();
  const workerId = useSelector(state => state.workers.current_worker.id);

  const dispatch = useDispatch();
  const isAuthenticated = useIsAuthenticated();
  const role = getRoleFromToken(instance, accounts);
  console.log('WorkerId in App.js ==> ', workerId, role);

  // const workerId = useSelector(state => state.workers.current_worker.id);



  useEffect(() => {
    if (role === 'CRM.Manage') {
      console.log('ROlesddsa');
      dispatch(getCustomers());
      // dispatch(getWorkerCustomers(workerId));
    } else {
      console.log('workeer thinggg', typeof workerId);
      dispatch(getWorkerCustomers(workerId));
    }
    dispatch(getWorkers());
  }, [dispatch, role, workerId]);

  return (
    <div>
      <PageLayout />
      <Suspense fallback={<h1>Loading...</h1>}>
        {isAuthenticated ? <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contacts" element={<Index />} />
          <Route path="new_contact" element={<NewCustomer />} />
          <Route path="contact" element={<Show />} />
          <Route path="search" element={<Search />} />
          {/* <Route path="new_worker" element={<NewWorker />} /> */}
          {/* <Route path="add_worker" element={<AddWorkerToCustomer />} /> */}
          {/* <Route path="calendar" element={<OutlookCalendarDisplay />} /> */}
          {/* <Route path="event_create" element={<OutlookCalendarEventCreate />} /> */}
        </Routes>
          :
          null}
      </Suspense>
    </div>

  )
}
export default App;