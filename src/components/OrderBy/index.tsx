import React, { FC, useContext, useState } from "react";
import OrderContext from "../../contexts/OrderContext";

import { OrderTypes } from "../../types/order";
import "./index.css";

const Job: FC = () => {
  const [selected, setSelected] = useState(OrderTypes.Random);
  const { toggleOrder } = useContext(OrderContext)

  const onOrderChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    if (
      e.target.value === OrderTypes.Random ||
      e.target.value === OrderTypes.Prioprity
    ) {
      setSelected(e.target.value);
      toggleOrder && toggleOrder(e.target.value)
    }
  };
  return (
    <div className="App-sortby">
      <span className="App-sortby__label">Sort by: </span>
      <select
        className="App-sortby__select"
        id="filtersortby"
        onChange={onOrderChange}
        value={selected}
      >
        <option value={OrderTypes.Random}>Random</option>
        <option value={OrderTypes.Prioprity}>By Priority</option>
      </select>
    </div>
  );
};

export default Job;
