import OrderDefinition, { OrderTypes } from "../types/order";
import JobDefinition from "../types/job"

type OrderJobsFnDefinition = (jobs: JobDefinition[], orderby: OrderDefinition) => JobDefinition[]

const orderJobs: OrderJobsFnDefinition = (jobs, orderby) => {
  const jobsCopy = [ ...jobs ]
  switch(orderby) {
    case OrderTypes.Random:
      console.log(jobsCopy.sort((x, y) => {
        return x.priority - y.priority
      }))
      return jobsCopy.sort((x, y) => {
        return y.priority - x.priority
      })
    case OrderTypes.Priority:
      return jobs
  }
}

export default orderJobs