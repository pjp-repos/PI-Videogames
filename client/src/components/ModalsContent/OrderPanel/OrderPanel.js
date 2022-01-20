// Libraries
import React from 'react';
import { useDispatch} from 'react-redux';

// Redux actions
import { 
    orderGames,
    setModal 
} from '../../../redux/actions/actionsGames';

import { 
    sortCbNameNcsAsc,
    sortCbNameNcsDesc,
    sortCbRatingAsc,
    sortCbRatingDesc,
    sortCbReleasedAsc,
    sortCbReleasedDesc 
} from '../../../helpers/helpSortCallbacks';

// Custom hooks
import { useForm } from '../../../hooks/useForm';

// Styled components
import {
    OrderPanelWrapper,
    OrderPanelButton,
    OrderPanelButtonWrapp
} from "./OrderPanelElements";
import Dropdown from '../../AaaGenerics/Dropdown/Dropdown';
import { H3 } from '../../AaaGenerics/Texts/Hx';

// Form fields
const initialForm ={
    order: "", 
};

const sortCallbacks = {
    nameAsc:sortCbNameNcsAsc,
    nameDesc:sortCbNameNcsDesc,
    ratingAsc:sortCbRatingAsc,
    ratingDesc:sortCbRatingDesc,
    releasedAsc:sortCbReleasedAsc,
    releasedDesc:sortCbReleasedDesc
}

// Field validations
const validationsForm = (form)=>{
    let errors={};
    return errors;
};

const orderList = [
    {key:"",value:"No order"},
    {key:"nameAsc",value:"Order by name ascending"},
    {key:"nameDesc",value:"Order by name descending"},
    {key:"ratingAsc",value:"Order by rating ascending"},
    {key:"ratingDesc",value:"Order by rating descending"},
    {key:"releasedAsc",value:"Order by released date ascending"},
    {key:"releasedDesc",value:"Order by released date descending"},
];

const OrderPanel = () => {
    // Redux
    const dispatch = useDispatch();    
    const closeModal=()=>dispatch(setModal({modal:'orderPanel',value:false}));
    
    const submitForm=(form)=>dispatch(orderGames({form:form, Cbs:sortCallbacks}));
    
    // Custom hook useForm
    const {        
        form,
        handleDropdown,
        handleSubmit,
        resetFields
    } = useForm(initialForm, validationsForm, submitForm);

    const handleExecute = ()=>{
        if(handleSubmit(true)){
            closeModal();
        };
    };

    const handleCancel = ()=>{
        resetFields();
        closeModal();
    };

    return (
        <>
            <OrderPanelWrapper>
                <H3>Order panel</H3>
                <Dropdown 
                        titleOn="Order by"
                        titleOff="Close"
                        options={orderList}
                        multiple={false}
                        
                        fieldName='order'
                        fieldValue={form.order}
                        dropdownCb={handleDropdown}
                />
                <OrderPanelButtonWrapp>
                    <OrderPanelButton onClick={resetFields}>
                        Clear fields
                    </OrderPanelButton>
                    <OrderPanelButton onClick={handleCancel}>
                        Cancel/Close
                    </OrderPanelButton>
                    <OrderPanelButton onClick={handleExecute}>
                        Order
                    </OrderPanelButton>
                </OrderPanelButtonWrapp>
            </OrderPanelWrapper>
        </>
    )
}

export default OrderPanel;