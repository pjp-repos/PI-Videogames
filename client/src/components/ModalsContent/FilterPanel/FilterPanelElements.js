import styled from "styled-components";

import { Button } from "../../AaaGenerics/Button/Button";
import { Input } from "../../AaaGenerics/Input";

export const FilterPanelWrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 8px;

    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 20% 5% 5% 5% 30% 35%; 
    /* justify-content: center; */
    justify-items: center;
    align-items: center;

    background-color: transparent; 
    
    @media screen and (min-width: 768px){
        grid-template-rows: 25% 5% 5% 5% 45% 15%; 
    }
`;

export const FilterPanelInput = styled(Input)`
`;
export const FilterPanelButton = styled(Button)`

`;

export const FilterPanelButtonWrapp = styled.div`
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