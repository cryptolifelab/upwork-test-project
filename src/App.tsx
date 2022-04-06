import React, { useEffect, useMemo, useState } from "react";

import Job from "./components/Job";
import Nav from "./components/Nav";
import OrderBy from "./components/OrderBy";
import OrderContext from "./contexts/OrderContext";
import OrderDefinition, { OrderTypes } from "./types/order";
import orderJobs from "./utils/orderJobs";

import "./App.css";
import JobDefinition from "./types/job";

const App: React.FC = () => {
  const [jobs, setJobs] = useState([]);
  const [orderby, setOrderby] = useState<string>(OrderTypes.Random)
  const fetchData: () => Promise<void> = async () => {
    const result = await fetch("/jobs.json");
    const data = await result.json();
    setJobs(data);
  };
  
  useEffect(() => {
    setTimeout(() => fetchData(), 3000);
  }, []);

  const orderedJobs = useMemo<JobDefinition[]>(() => {
    return orderJobs(jobs, orderby as OrderDefinition)
  }, [ jobs, orderby ])
  const JobList: React.ReactElement[] = orderedJobs.map((value) => {
    const { id } = value;
    return <Job key={id} {...value} />;
  });

  const toggleOrder = (newOrder: string) => setOrderby(newOrder)

  return (
    <div className="App">
      <OrderContext.Provider
        value={{
          orderby: orderby as OrderDefinition,
          toggleOrder
        }}
      >
        <Nav />
        {!!JobList.length && (
          <div data-testid="app-jobs" className="App-jobs">
            <OrderBy />
            {JobList}
          </div>
        )}
      </OrderContext.Provider>
    </div>
  );
};

export default App