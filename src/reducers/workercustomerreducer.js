import { createReducer } from "@reduxjs/toolkit";  

const initialState = {
    worker_customers: [],
    worker_customers_succeeded: false, //The purpose of this is that when we start the webpage, if we have no worker_customers at all, we run the risk of having it load forever. Instead, we'll change this and load based on if this is true or not instead of if there are worker_customers or not
    worker_customers_restricted: [],
    worker_customers_restricted_succeeded: false,
}

const workerCustomerReducer = createReducer(initialState, (builder) => {
    builder
      // Get All of the Customer
      .addCase("GET_ALL_WORKER_CUSTOMERS", (state, action) => {
        state.worker_customers = action.payload;
        state.worker_customers_succeeded = true;
      })
      // Get All Customers, but email & phone is restricted to the workers who are not associated with customers
      .addCase("GET_ALL_RESTRICTED_WORKER_CUSTOMERS", (state, action) => {
        console.log('Worker Customer Restricted Reducer ==> ', action.payload);
        state.worker_customers_restricted = action.payload;
        state.worker_customers_restricted_succeeded = true;
      })
      .addCase("CREATE_NEW_WORKER_CUSTOMERS", (state, action) => {
        state.worker_customers = state.worker_customers.concat(action.payload);
      })
      .addCase("ADDED_WORKER", (state, action) => {
        state.worker_customers.push(action.payload[0]);
      })
      .addDefaultCase((state,action) => {})
})

export default workerCustomerReducer;

// export default function workerCustomerReducer(state = initialState, action){
//     switch(action.type){
//         case 'GET_ALL_WORKER_CUSTOMERS':
//             return{
//                 ...state,
//                 worker_customers: action.payload,
//                 worker_customers_succeeded: true
//             }
//         case 'CREATE_NEW_WORKER_CUSTOMERS':
//             return{
//                 ...state,
//                 worker_customers: state.worker_customers.concat(action.payload)
//             }
//         case 'ADDED_WORKERS':
//             return{
//                 ...state,
//                 worker_customers: state.worker_customers
//             }
//         default:
//             return{
//                 ...state
//             }
//     }
// }
 

