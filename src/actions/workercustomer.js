import axios from 'axios';


export const getWorkerCustomers = () => dispatch => {
  console.log('Actions ', `https://crmpilotCpy1.azurewebsites.net/workercustomers`);
  axios.get(`https://crmpilotCpy0.azurewebsites.net/workercustomers`)
    .then(response => dispatch({ type: 'GET_ALL_WORKER_CUSTOMERS', payload: response.data }))
}

export const getAllWorkerCustomers = (workerId) => dispatch => {
  console.log('Actions ', `https://crmpilotCpy1.azurewebsites.net/workercustomers/${workerId}`);
  axios.get(`https://crmpilotCpy1.azurewebsites.net/workercustomers/${workerId}`)
    .then(response => dispatch({ type: 'GET_ALL_RESTRICTED_WORKER_CUSTOMERS', payload: response.data }))
}

export const addWorkerToCustomer = (customer_id, worker_id) => dispatch => {
  //This deletes the customer as well as the worker_customers associated with it
  axios.post(`https://crmpilotCpy1.azurewebsites.net/workercustomers`, { customer_id: customer_id, worker_id: worker_id })
    .then((response) => {
      console.log('here')
      dispatch({ type: 'ADDED_WORKER', payload: response.data });
    })
    .catch(err => console.log(err))
}

/*
import axios from 'axios';
import { useMsal } from "@azure/msal-react";

export const getWorkerCustomers = () => dispatch => {
    // Extracting the workerId from the MSAL token's claims
    //const { accounts } = useMsal();
    const idTokenClaims = account.idTokenClaims;
    const workerId = idTokenClaims['workerId']; // Replace 'workerId' with the actual key
    axios.get("https://crmpilot0.azurewebsites.net/workercustomers", { headers: { 'workerId': workerId } })
        .then(response => dispatch({ type: 'GET_ALL_WORKER_CUSTOMERS', payload: response.data }))
}
*/