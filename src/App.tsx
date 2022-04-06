import React, { useEffect, useState } from "react";

import Job from "./components/Job";
import Nav from "./components/Nav";
import OrderBy from "./components/OrderBy";
import OrderContext from "./contexts/OrderContext";
import { OrderTypes } from "./types/order";

import "./App.css";

const App: React.FC = () => {
  const [jobs, setJobs] = useState([]);
  const [rendomJobs, setRendomJobs] = useState([]);

  const fetchData: () => Promise<void> = async () => {
    const result = await fetch("/jobs.json");
    const data = await result.json();
    setJobs(data);
    setRendomJobs(data);
  };

  const toggleOrder = (newOrder: string) => {
    if(newOrder == OrderTypes.Prioprity){
      const sortByPriority = [...jobs];
      sortByPriority.sort((a:any, b:any) => (a.priority > b.priority ? -1 : 1))
      setJobs(sortByPriority);
    }else{
      setJobs(rendomJobs);
    }
  };

  useEffect(() => {
    setTimeout(() => fetchData(), 3000);
  }, []);

  const JobList: React.ReactElement[] = jobs.map((value) => {
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
        {!!JobList.length && (
          <div data-testid="app-jobs" className="App-jobs">
            <OrderBy changeOrder={toggleOrder} />
            {JobList}
          </div>
        )}
      </OrderContext.Provider>
    </div>
  );
};

export default App;
