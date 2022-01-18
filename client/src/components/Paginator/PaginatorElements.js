import styled from "styled-components";

import {Button} from "../AaaGenerics/Button/Button";
import Section from '../AaaGenerics/Sections/SectionRelative'

export const PaginatorSection = styled(Section)`
    background-color: black;
`;

export const PaginatorWrapper = styled.div`
    border: 0px;
    z-index: 20;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
`;

export const PaginatorButton = styled(Button)`
    cursor: ${({isDisabled}) => (isDisabled ? "no-drop" : "pointer")};    
`;

export const PaginatorSelectWrapp = styled.div`
    display: inline-flex;
    justify-content: center;
    align-items: center;
`;

export const PaginatorSelectText = styled.span`
    padding: 5px;
    display: none;
    background-color: black;
    color: white;
    white-space: nowrap;
    @media screen and (min-width: 768px){
        display: inline;
    }

`;

export const PaginatorSelectDropdown = styled.select`
    width: 100%;
    height: 35px;
    background: transparent;
    color: white;
    margin: 0 10px;
    font-size: 14px;
    border: none;
    margin-left: 10px;
    -webkit-scrollbar-track: black;
    &:hover{
        cursor: pointer;
    }
    option {
        color: white;
        background: black;
        display: flex;
        white-space: pre;
        min-height: 20px;
        padding: 0px 2px 1px;
    }
`;

