import JobDefinition from "./job";
import OrderDefinition from "./order";

export type OrderJobsFn = (
  jobs: JobDefinition[],
  orderby: OrderDefinition
) => JobDefinition[];
