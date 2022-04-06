import React, {useEffect, useState} from "react";

import Job from "./components/Job";
import Nav from "./components/Nav";
import OrderBy from "./components/OrderBy";
import OrderContext from "./contexts/OrderContext";
import {OrderTypes} from "./types/order";
import {shuffleSort} from "./helpers/sort/shuffleSort";
import "./App.css";
import JobDefinition from "./types/job";
import {compareSortByPriority} from "./helpers/sort/compareSortByPriority";
import Loader from "./components/Loader";

const App: React.FC = () => {
    const [orderby, setOrderBy] = useState(OrderTypes.Random)
    const [jobs, setJobs] = useState<JobDefinition[]>([]);

    const fetchData: () => Promise<void> = async () => {
        const result = await fetch("/jobs.json");
        const data = await result.json();

        setJobs(data);
    };

    const toggleOrder = (newOrder: string) => {
        if (newOrder === OrderTypes.Random || newOrder === OrderTypes.Priority) setOrderBy(newOrder);
    };

    useEffect(() => {
        const timer = setTimeout(() => fetchData(), 3000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (jobs.length > 0) {
            const jobsOrder = [...jobs].sort(orderby === OrderTypes.Priority ? compareSortByPriority : shuffleSort)

            setJobs(jobsOrder);
        }
    }, [orderby])

    const JobList: React.ReactElement[] = jobs.map((value: JobDefinition) => (<Job key={value.id} {...value} />))

    return (
        <div className="App">
            <OrderContext.Provider
                value={{
                    orderby,
                    toggleOrder,
                }}
            >
                <Nav/>
                {!!JobList.length ? (
                    <div data-testid="app-jobs" className="App-jobs">
                        <OrderBy/>
                        {JobList}
                    </div>
                ) : <Loader isLoaded={!!JobList.length}/>}
            </OrderContext.Provider>
        </div>
    );
};

export default App;
