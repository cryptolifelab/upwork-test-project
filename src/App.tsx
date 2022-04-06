import React, { useEffect, useState } from "react";

import Job from "./components/Job";
import Nav from "./components/Nav";
import OrderBy from "./components/OrderBy";
import OrderContext from "./contexts/OrderContext";
import { OrderTypes } from "./types/order";

import "./App.css";

const LoadingInd: React.FC = () => {
  return <div className="loading-ind">
    <div className="loading-ind-title">
      Loading Jobs
    </div>
    <div className="loading-ind-subtitle">
      It won't take long
    </div>
  </div>
}

const App: React.FC = () => {
  const [jobs, setJobs] = useState([]);

  const fetchData: () => Promise<void> = async () => {
    const result = await fetch("/jobs.json");
    const data = await result.json();
    setJobs(data);
  };

  const toggleOrder = (newOrder: string) => console.log(newOrder);

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
        {!!JobList.length ? (
          <div data-testid="app-jobs" className="App-jobs">
            <OrderBy />
            {JobList}
          </div>
        ): <LoadingInd />}
      </OrderContext.Provider>
    </div>
  );
};

export default App;
