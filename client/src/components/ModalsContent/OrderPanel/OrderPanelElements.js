import styled from "styled-components";
import { Button } from "../../AaaGenerics/Button/Button";

export const OrderPanelWrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 8px;

    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 20% 50% 30%; 
    /* justify-content: center; */
    justify-items: center;
    align-items: center;

    background-color: transparent; 
    
    @media screen and (min-width: 768px){
        grid-template-rows: 20% 50% 30%;
    }
`;

export const OrderPanelButton = styled(Button)`
`;

export const OrderPanelButtonWrapp = styled.div`
    width: 100%;
    height: 100%;
    padding: 10px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items:center;
    border-radius: 5px;
    
    @media screen and (min-width: 768px){
        flex-direction: row;
        height: auto;
    }
`;