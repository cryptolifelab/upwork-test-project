import { OrderTypes } from "../types/order";
import { OrderJobsFn } from "../types/orderJobs";

const orderJobs: OrderJobsFn = (jobs, orderby) => {
  const jobsCopy = [...jobs];
  switch (orderby) {
    case OrderTypes.Random:
      return jobs;
    case OrderTypes.Priority:
      return jobsCopy.sort((a, b) => {
        return b.priority - a.priority;
      });
  }
};

export default orderJobs;
