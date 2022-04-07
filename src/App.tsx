import React, { useEffect, useState } from "react";

import Job from "./components/Job";
import Nav from "./components/Nav";
import OrderBy from "./components/OrderBy";
import OrderContext from "./contexts/OrderContext";
import { OrderTypes } from "./types/order";
import JobDefinition from "./types/job";

import "./App.css";

const App: React.FC = () => {
  const [jobs, setJobs] = useState([]);
  const [paginatedJobs, setPaginatedJobs] = useState([]);
  const [pageIndex, setPageIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => fetchData(), 3000);
  }, []);

  useEffect(() => {
    setPaginatedJobs([]);
    setPaginatedJobs([...jobs].slice(pageIndex * 100, 100 + pageIndex * 100));
  }, [jobs, pageIndex]);

  const fetchData: () => Promise<void> = async () => {
    const result = await fetch("/jobs.json");
    const data = await result.json();
    setJobs(data);
  };

  const toggleOrder = (newOrder: string) => {
    const jobsCopy = [...jobs];
    if (newOrder === OrderTypes.Priority) {
      jobsCopy.sort((a: JobDefinition, b: JobDefinition) =>
        a.priority > b.priority ? -1 : 1
      );
    } else {
      jobsCopy.sort(() => 0.5 - Math.random());
    }
    setJobs(jobsCopy);
  };

  useEffect(() => {
    setTimeout(() => fetchData(), 3000);
  }, []);

  const JobList: React.ReactElement[] = paginatedJobs.map(
    (value: JobDefinition) => <Job key={value.id} {...value} />
  );

  return (
    <div className="App">
      <OrderContext.Provider
        value={{
          orderby: OrderTypes.Random,
          toggleOrder,
        }}
      >
        <Nav />
        {!JobList.length ? (
          <div className="App-loader-wrapper">
            <div className="App-loader"></div>
            <span>Loading Jobs...</span>
          </div>
        ) : (
          <div data-testid="app-jobs" className="App-jobs">
            <OrderBy toggleOrder={toggleOrder} />
            {JobList}
            <div className="App-pagination">
              <button
                disabled={!pageIndex}
                type="button"
                onClick={() => setPageIndex(pageIndex - 1)}
              >
                Previous
              </button>
              <button type="button" onClick={() => setPageIndex(pageIndex + 1)}>
                Next
              </button>
            </div>
          </div>
        )}
      </OrderContext.Provider>
    </div>
  );
};

export default App;
