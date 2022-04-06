import JobDefinition from "../../types/job";

//sorting func from low to high
export const compareSortByPriority = (itemCur: JobDefinition, itemNext: JobDefinition): number => itemCur.priority > itemNext.priority ? 1 : itemNext.priority > itemCur.priority ? -1 : 0

