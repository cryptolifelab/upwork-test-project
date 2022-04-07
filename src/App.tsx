import React, { Suspense, useEffect, useState } from "react";
import Job from "./components/Job";
import Nav from "./components/Nav";
import OrderBy from "./components/OrderBy";
import OrderContext from "./contexts/OrderContext";
import { OrderTypes } from "./types/order";
import "./App.css";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "./components/Loader";

const App: React.FC = () => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [offSet, setOffSet] = useState<number>(0);
  const [allJobs, setAllJobs] = useState([]);

  const fetchData: () => Promise<void> = async () => {
    try {
      setIsLoading(true);
      const result = await fetch("/jobs.json");
      const data = await result.json();
      setAllJobs(data);
      setJobs(data.slice(offSet, 10));
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleOrder = (newOrder: OrderTypes) => {
    const filterJobs = [...jobs];
    if (newOrder === OrderTypes.Prioprity) {
      filterJobs.sort(({ priority: A }, { priority: B }) => B - A);
      setJobs(filterJobs);
    } else {
      filterJobs.sort(() => 0.5 - Math.random());
      setJobs(filterJobs);
    }
  };

  const fetchMoreData = () => {
    const startIndex = offSet + 10;
    setJobs((prev) => prev.concat(allJobs.slice(startIndex, startIndex + 10)));
    setOffSet(startIndex);
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

        {isLoading ? (
          <Loader />
        ) : (
          !!jobs.length && (
            <div data-testid="app-jobs" className="App-jobs">
              <OrderBy />
              <InfiniteScroll
                dataLength={jobs.length}
                next={fetchMoreData}
                loader={isLoading && <Loader />}
                hasMore={true}
              >
                <Suspense fallback={<Loader />}>{JobList}</Suspense>
              </InfiniteScroll>
            </div>
          )
        )}
      </OrderContext.Provider>
    </div>
  );
};

export default App;
