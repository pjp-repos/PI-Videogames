import styled from "styled-components";
import { Button } from "../Button/Button";

export const DropDownContainer = styled("div")`
    padding-right: 10px;
    position: relative;
    overflow: visible;
`;

export const DropDownButton = styled(Button)`
    min-width: 100px;
    max-width: 90vw;
    
    border-bottom-left-radius: ${
        ({show})=>(show ? '10px' : '50px' )
    };
    border-bottom-right-radius: ${
        ({show})=>(show ? '10px' : '50px' )
    };
`;

export const DropDownListContainer = styled.div`
    min-width: 100px;
    max-width: 90vw;
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

    border-radius: 10px;
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
    transition: 0.1s ease-in-out;   
    display: ${
        ({show})=>(show ? 'flex' : 'none' )
    };
`;


export const DropDownListItem = styled.div`
    width: 100%;
    margin-top: 5px;
    margin-bottom: 5px;
    padding: 5px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    border-radius: 5px;
    cursor: pointer;
    color: white;
    white-space: nowrap;
    background-color: ${
            ({isSelected})=>(isSelected ? 'var(--first-color)' : 'transparent' )
        };
    &:hover{
        border-bottom: 2px solid var(--first-color);
    }
`;