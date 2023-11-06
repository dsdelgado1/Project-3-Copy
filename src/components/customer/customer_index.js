import '../components.scss';
import { lookAtSpecificCustomer } from '../../actions/customer';
import { useMemo, lazy, Suspense, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Table = lazy(() => import('./customer_index_table.js'));


const Index = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const customers = useSelector((state) => state.customers) // Here are all of the customers
  const customersIfNoSearchedCustomersElseSearchedCustomersRef = useRef([]) //The reason we're including this is that if there are searched customers, we want to use them instead of all customers
  const workers = useSelector((state) => state.workers)
  const workerCustomers = useSelector((state) => state.workerCustomers)
  const workerCustomersRestricted = useSelector((state) => state.workerCustomers.worker_customers_restricted)

  console.log('workerCustomersRestricted ==> ', customers.customers.length === 0)

  const columns = useMemo( //These are the columns for the table we're using
    () => [
      {
        Header: 'Contacts',
        columns: [
          {
            Header: 'Company Name',
            accessor: 'company',
          },
          {
            Header: 'Contact Name',
            accessor: 'customer_name',
          },
          {
            Header: 'Category',
            accessor: 'category',
          },
          {
            Header: 'WB Wood Owner(s)',
            accessor: 'workers',
          },
          {
            Header: 'Contact Email Address',
            accessor: 'contact_email',
          },
          {
            Header: 'Contact Phone Number',
            accessor: 'contact_phone_number',
          },

          /*               {
                          Header: "See Contact",
                          accessor: "customer_button"
                        } */
        ],
      }
    ],
    []
  )

  const workerListMaker = (id_of_customer) => {
    //Using worker_customers to get worker information 
    const workers_list = [];
    const worker_customers_list = workerCustomers.worker_customers.filter(x => x.customer_id === id_of_customer);
    for (const worker_customer of worker_customers_list) {
      workers_list.push(workers.workers.find(worker => worker.id === worker_customer.worker_id).name)
    }
    return workers_list
  }

  /*   *****************  DD Rev 2old dataMaker to be replaced with new dataMaker below for sorting Alphabetically by 1. Company Name  2.  Customer/Contact Name**********************************
  const dataMaker = () => {
      //This is how we make the array work in a way that 
      if (customers.searched) {
        customersIfNoSearchedCustomersElseSearchedCustomersRef.current = customers.searched_customers
      }
      else {
        customersIfNoSearchedCustomersElseSearchedCustomersRef.current = customers.customers
      }
      return (customersIfNoSearchedCustomersElseSearchedCustomersRef.current.map((individual_customer) => {
        const workers_array = workerListMaker(individual_customer.id).map((worker, index, workers) => {
          if (index + 1 === workers.length) {
            return worker;
          }
          else {
            return worker + ", ";
          }
        });
        return (
          {
            company: individual_customer.company,
            customer_name: individual_customer.contact_name,
            category: individual_customer.category,
            workers: workers_array,
            customer_button: <button className='see_contact_button' onClick={e => handleClick(e, individual_customer)}>See Contact</button>
          }
        )
      }))
      *******************new dataMaker below (read comment above old dataMaker for clarification - DD Rev 2 )
    } */
  const dataMaker = () => {
    if(customers.customers.length === 0) {
      const sortedWorkerCustomers = [...workerCustomersRestricted].sort((a, b) => {
        if (a.company < b.company) return -1;
        if (a.company > b.company) return 1;

        // If company is the same, sort by customer_name
        if (a.contact_name < b.contact_name) return -1;
        if (a.contact_name > b.contact_name) return 1;

        return 0;
      });

      return sortedWorkerCustomers.map((individual_customer) => {
        // const workers_array = workerListMaker(individual_customer.id).map((worker, index, workers) => {
        //   if (index + 1 === workers.length) {
        //     return worker;
        //   } else {
        //     return worker + ", ";
        //   }
        // });
        
        return {
          company: individual_customer.company,
          customer_name: individual_customer.contact_name,
          category: individual_customer.category,
          contact_email: individual_customer.contact_email,
          contact_phone_number: individual_customer.contact_phone_number,
          workers: individual_customer.name,
          customer_button: <button className='see_contact_button' onClick={e => handleClick(e, individual_customer)}>See Contact</button>
        };
      });

    } else {
      // Determine which customers to use: either all customers or searched customers
      const customerData = customers.searched ? customers.searched_customers : customers.customers;

      // Sort customers by 'company' first, then 'customer_name'
      const sortedCustomers = [...customerData].sort((a, b) => {
        if (a.company < b.company) return -1;
        if (a.company > b.company) return 1;

        // If company is the same, sort by customer_name
        if (a.contact_name < b.contact_name) return -1;
        if (a.contact_name > b.contact_name) return 1;

        return 0;
      });

      // Now, we proceed to map over the sorted customers to construct the table data
      return sortedCustomers.map((individual_customer) => {
        const workers_array = workerListMaker(individual_customer.id).map((worker, index, workers) => {
          if (index + 1 === workers.length) {
            return worker;
          } else {
            return worker + ", ";
          }
        });
        return {
          company: individual_customer.company,
          customer_name: individual_customer.contact_name,
          category: individual_customer.category,
          contact_email: individual_customer.contact_email,
          contact_phone_number: individual_customer.contact_phone_number,
          workers: workers_array,
          customer_button: <button className='see_contact_button' onClick={e => handleClick(e, individual_customer)}>See Contact</button>
        };
      });
    }
   
  };


  const handleClick = (e, chosen_customer) => {
    //This should mean they clicked on a choice and now they're supposed to be routed to the show page of that specific customer
    dispatch(lookAtSpecificCustomer(chosen_customer, workerListMaker(chosen_customer.id)))
    navigate('/contact')
    /* Route to page once redux saves the information */
  }

  // if (workerCustomers.worker_customers_succeeded === false || customers.customers_succeeded === false || workers.workers_succeeded === false) {
  //   return <h1>Loading...</h1>
  // }
  // else {
  return (
    <div className="index">
      {/* <Suspense fallback={<h1>Loading...</h1>}> */}
      <Table columns={columns} data={dataMaker()} />
      {/* </Suspense> */}
    </div>
  )
  // }

}



export default Index;
