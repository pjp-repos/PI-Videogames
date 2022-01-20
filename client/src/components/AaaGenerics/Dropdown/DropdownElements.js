import styled from "styled-components";
import { Button } from "../Button/Button";

export const DropDownContainer = styled("div")`
    width: 100%;
    /* padding-right: 10px; */
    position: relative;
    overflow: visible;
    
    @media screen and (min-width: 768px){
        width: 150px;
    }
`;

export const DropDownButton = styled(Button)`
    width: 100%;
    border-bottom-left-radius: ${
        ({show})=>(show ? '0' : '50px' )
    };
    border-bottom-right-radius: ${
        ({show})=>(show ? '0' : '50px' )
    };
    &:hover{
        background-color: var(--first-color);
    }
`;

export const DropDownListContainer = styled.div`
    /* min-width: 100px;
    max-width: 90vw; */
    width: 100%;
    max-height:200px;
    padding: 1rem;
    border: 2px solid var(--first-color);

    position: absolute;
    top:110%;
    left:0;
    z-index: 997;

    display: flex;
    flex-direction: column;
    justify-content: start;    
    align-items: center;

    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    background-color: black;
    overflow-y: auto;
    &::-webkit-scrollbar {
        width: 12px;
    }

    &::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 10px rgba(255,255,255,0.5); 
        border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 10px rgba(255,255,255,0.3); 
    }     
    display: ${
        ({show})=>(show ? 'flex' : 'none' )
    };

`;


export const DropDownListItem = styled.div`
    width: 100%;
    margin-top: 5px;
    margin-bottom: 5px;
    padding: 5px;
    border: 2px solid transparent;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    border-radius: 5px;
    cursor: pointer;
    color: white;
    /* white-space: nowrap; */
    background-color: ${
            ({isSelected})=>(isSelected ? 'var(--first-color)' : 'transparent' )
        };
    &:hover{
        border: 2px solid var(--first-color);
    }
`;