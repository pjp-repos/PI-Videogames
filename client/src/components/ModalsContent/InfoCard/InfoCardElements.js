import styled from "styled-components";

export const CardWrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 8px;

    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 17.5% 50% 10% 20% ;
    grid-row-gap: 3px;
    text-align: center;
    background-color: transparent; 
    @media screen and (min-width: 768px){
        grid-template-rows: 10% 57.5% 10% 20% ;
    }
`;


export const CardImage = styled.img`
    width:100%;
    height: 100%;
    align-items: center;
    object-fit: cover;
    object-position: center top;
    cursor: pointer;
    border-radius: 8px;
`;


