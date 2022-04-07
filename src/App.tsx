import { FC, ReactElement, useEffect, useMemo, useState } from "react";

import Job from "./components/Job";
import Nav from "./components/Nav";
import Loader from "./components/Loader";
import OrderBy from "./components/OrderBy";
import OrderContext from "./contexts/OrderContext";

import OrderDefinition, { OrderTypes } from "./types/order";
import orderJobs from "./utils/orderJobs";
import useInfiniteScroll from "./hooks/useInfiniteScroll.hook";
import "./App.css";

const App: FC = () => {
  const [jobs, setJobs] = useState([]);
  const [showJobs, setShowjobs] = useState<number>(5);
  const [orderby, setOrderby] = useState<string>(OrderTypes.Random);
  const [setIsFetching] = useInfiniteScroll(loadMore);

  const fetchData: () => Promise<void> = async () => {
    const result = await fetch("/jobs.json");
    const data = await result.json();
    setJobs(data);
  };

  const toggleOrder = (newOrder: string) => setOrderby(newOrder);

  useEffect(() => {
    setTimeout(() => fetchData(), 3000);
  }, []);

  function loadMore() {
    setIsFetching(false);
    setShowjobs((prev) => prev + 5);
  }

  const jobsOrdered = useMemo(() => {
    return orderJobs(jobs, orderby as OrderDefinition);
  }, [jobs, orderby]);

  const JobList: ReactElement[] = jobsOrdered
    .slice(0, showJobs)
    .map((value) => {
      const { id } = value;
      return <Job key={id} {...value} />;
    });

  return (
    <div className="App">
      <OrderContext.Provider
        value={{
          orderby: orderby as OrderDefinition,
          toggleOrder,
        }}
      >
        <Nav />
        {!!JobList.length ? (
          <div data-testid="app-jobs" className="App-jobs">
            <OrderBy />
            {JobList}
          </div>
        ) : (
          <Loader />
        )}
      </OrderContext.Provider>
    </div>
  );
};

export default App;
