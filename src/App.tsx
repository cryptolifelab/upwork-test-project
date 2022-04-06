import React, { useEffect, useState } from "react";

import Job from "./components/Job";
import Nav from "./components/Nav";
import OrderBy from "./components/OrderBy";
import OrderContext from "./contexts/OrderContext";
import "./App.css";
import InfiniteScroll from "react-infinite-scroll-component";
import JobDefinition from "./types/job";
import { OrderTypes } from "./types/order";

const App: React.FC = () => {
  const [offset, setOffset] = useState(0);
  const [orgJobs, setOrgJobs] = useState<JobDefinition[]>([]);
  const [jobs, setJobs] = useState<JobDefinition[]>([]);

  useEffect(() => {
    setTimeout(() => fetchData());
  }, []);

  useEffect(() => sort(offset), [offset]);

  useEffect(() => {
    setOffset((prev) => {
      if (prev === 0) {
        sort(0);
      }
      return 0;
    });
  }, [orgJobs]);

  const fetchData: () => Promise<void> = async () => {
    const result = await fetch("/jobs.json");
    const data = await result.json();
    setOrgJobs(data);
    setJobs(data.slice(offset, 100));
  };

  const toggleOrder = (newOrder: string) => {
    let sortedArr: JobDefinition[] = [];
    if (newOrder === OrderTypes.Random) {
      sortedArr = orgJobs.sort(() => Math.random() - 0.5);
    } else {
      sortedArr = orgJobs.sort(
        (a: JobDefinition, b: JobDefinition) => b.priority - a.priority
      );
    }
    setOrgJobs([...sortedArr]);
  };

  const JobList: React.ReactElement[] = jobs.map((value) => {
    const { id } = value;
    return <Job key={id} {...value} />;
  });

  const sort = (offset_: number) => {
    setJobs((prev) => {
      const newData = orgJobs.slice(offset_ * 100, offset_ * 100 + 100);
      if (offset_ > 0) {
        return [...prev, ...newData];
      }
      return newData;
    });
  };

  return (
    <div className="App">
      <OrderContext.Provider
        value={{
          toggleOrder,
        }}
      >
        <Nav />
        {!!JobList.length && (
          <div data-testid="app-jobs" className="App-jobs">
            <OrderBy />
            <InfiniteScroll
              dataLength={jobs.length}
              next={() => setOffset((prev) => prev + 1)}
              loader={jobs.length === orgJobs.length ? <></>: <span>Loading</span>}
              hasMore={true}
              scrollableTarget="scrollableDiv"
            >
              {JobList}
            </InfiniteScroll>
          </div>
        )}
      </OrderContext.Provider>
    </div>
  );
};

export default App;
