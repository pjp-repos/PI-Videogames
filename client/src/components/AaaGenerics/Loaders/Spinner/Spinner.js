import React from 'react'
import {
    SpinnerDiv,
    SpinnerWrapper,
    SpinnerText 

}from './SpinnerElements';

const Spinner = () => {
    return (  
        <SpinnerWrapper>
            <SpinnerText>
                Loading...
            </SpinnerText>
            <SpinnerDiv/>
        </SpinnerWrapper>   
    )
}

export default Spinner
