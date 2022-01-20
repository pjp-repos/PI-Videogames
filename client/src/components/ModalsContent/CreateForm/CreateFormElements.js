import styled from "styled-components";

import { Button } from "../../AaaGenerics/Button/Button";
import { Input } from "../../AaaGenerics/Input";

export const CreateFormWrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 8px;

    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 9% repeat(5,5% 2%) 33% 25%; 
    /* justify-content: center; */
    justify-items: center;
    align-items: center;

    background-color: transparent; 
    
    @media screen and (min-width: 768px){
        grid-template-rows: 10% repeat(5,7% 2%) 20% 35%; 
    }
`;


export const CreateFormError = styled.p`
    color:red;
`;

export const CreateFormInput = styled(Input)`
`;
export const CreateFormButton = styled(Button)`

`;

export const CreateFormButtonWrapp = styled.div`
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