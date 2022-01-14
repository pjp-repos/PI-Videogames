// Libraries
import React from 'react';
import { useDispatch} from 'react-redux';

// Redux actions
import { orderGames } from '../../../redux/actions/actionsGames';

// Custom hooks
import { useOrder } from '../../../hooks/useOrder';

// Styled components
import {
    OrderPanelWrapper,
    OrderPanelSelect,
    OrderPanelOption,
    OrderPanelButton
} from "./OrderPanelElements";


const initialOrder = "";

const orderList = [
    {value:"",text:"No order"},
    {value:"nameAsc",text:"Order by name ascending"},
    {value:"nameDesc",text:"Order by name descending"},
    {value:"ratingAsc",text:"Order by rating ascending"},
    {value:"ratingDesc",text:"Order by rating descending"},
    {value:"releasedAsc",text:"Order by released date ascending"},
    {value:"releasedDesc",text:"Order by released date descending"},
];

const OrderPanel = ({closeModal}) => {
    // Redux
    const dispatch = useDispatch();    
    
    // useOrder custom hook
    const {   
        order,   
        handleChange,
        resetOrder
    } = useOrder(initialOrder);

    const handleExecuteOrder = ()=>{
        dispatch(orderGames(order));
        resetOrder();
        closeModal();
    };

    return (
        <>
            <OrderPanelWrapper>
                <OrderPanelSelect 
                    value={order}
                    onChange={handleChange}
                >
                    {
                        orderList.map((el)=>
                        <OrderPanelOption key={el.value} value={el.value}>
                            {el.text}
                        </OrderPanelOption>
                        )
                    }
                </OrderPanelSelect>

                <OrderPanelButton onClick={handleExecuteOrder}>
                    Order
                </OrderPanelButton>
            </OrderPanelWrapper>
        </>
    )
}

export default OrderPanel;