import styled from "styled-components";

export const CardWrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 8px;

    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 7.5% 60% 10% 20% ;
    grid-row-gap: 3px;
    text-align: center;
    background-color: transparent; 
`;


export const CardImage = styled.img`
    width:100%;
    height: 100%;
    
    object-fit: cover;
    object-position: center top;
    
    border-radius: 8px;
`;


