import orderJobs from "./orderJobs"
import { OrderTypes } from "../types/order"
import JobDefinition from "../types/job"

const testJobs: JobDefinition[] = Array(100).fill(0).map((_, index) => {
    return { 
        description: "Sample Description",
        priority: Math.round(Math.random() * 100),
        id: String(index),
        role: "Sample Role",
        url: "Sample Url",
        city: "Sample City",
        company: { name: "Sample Company Name" }
    }
})

test("orders by priority in descending order", async () => {
    const orderedTestJobs = orderJobs(testJobs, OrderTypes.Priority)
    expect(orderedTestJobs).toEqual([ ...testJobs ].sort((j1, j2) => j2.priority - j1.priority))
})