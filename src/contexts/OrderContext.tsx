import React from "react";
import OrderDefinition, { OrderTypes } from "../types/order";

interface IOrderContext {
  orderby: OrderDefinition;
  toggleOrder: (newOrder: string) => void;
}

const defaultState = {
  orderby: OrderTypes.Random,
  toggleOrder: () => { }
};

const OrderContext = React.createContext<IOrderContext>(defaultState);

export default OrderContext;
