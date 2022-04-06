import React, { useEffect, useState } from "react";

import Job from "./components/Job";
import Nav from "./components/Nav";
import OrderBy from "./components/OrderBy";
import OrderContext from "./contexts/OrderContext";
import { OrderTypes } from "./types/order";

import "./App.css";

const App: React.FC = () => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const fetchData: () => Promise<void> = async () => {
    setIsLoading(true)
    const result = await fetch("/jobs.json");
    const data = await result.json();
    setIsLoading(false)
    setJobs(data);
  };

  const toggleOrder = (newOrder: string) => {
     //if sort order is priority, it will take higher priority to first 
    //else it will show random
  
    let sortedJobs = [...jobs]
    if (newOrder === OrderTypes.Prioprity) {
      sortedJobs.sort((a, b) => b[newOrder] - a[newOrder])
      setJobs(sortedJobs)
    } else {
      sortedJobs.sort(() => 0.5 - Math.random())
      setJobs(sortedJobs)
    }
  }

  useEffect(() => {
    // there is no meaning call setTimeout on initial call as it will do nothing but wait for 3 seconds to call function fetchData 
    // instead show loading indicator to user untill API returns response
    fetchData()
  }, []);

  const JobList: React.ReactElement[] = jobs.map((value: any) => {
    const { id } = value;
    return <Job key={id} {...value} />;
  });

  return (
    <div className="App">
      <OrderContext.Provider
        value={{
          orderby: OrderTypes.Random,
          toggleOrder,
        }}
      >
        <Nav />
        {isLoading ? <div>please wait, loading....</div> :
        !!JobList?.length && (
          <div data-testid="app-jobs" className="App-jobs">
            <OrderBy />
            {JobList}
          </div>
        )}
      </OrderContext.Provider>
    </div>
  );
};

export default App;
