import React, {ChangeEvent, FC} from "react";
import {OrderTypes} from "../../types/order";
import "./index.css";
import OrderContext from "../../contexts/OrderContext";

const OrderBy: FC = () => {
    const {orderby, toggleOrder} = React.useContext(OrderContext);

    return (
        <div className="App-sortby">
            <span className="App-sortby__label">Sort by: </span>
            <select
                className="App-sortby__select"
                id="filtersortby"
                onChange={(e:ChangeEvent<HTMLSelectElement>)=>toggleOrder(e.target.value)}
                value={orderby}
            >
                <option value={OrderTypes.Random}>Random</option>
                <option value={OrderTypes.Priority}>By Priority</option>
            </select>
        </div>
    );
};

export default OrderBy;
