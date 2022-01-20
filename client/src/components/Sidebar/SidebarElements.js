import styled  from "styled-components";
import {FaTimes} from 'react-icons/fa';
import { Input } from '../AaaGenerics/Input';

export const SidebarContainer = styled.aside`
    width: 100%;
    height:100%;
    padding: 1rem;

    position: fixed;
    top: ${
        ({isOpen})=>(isOpen ? '0' : '-100%' )
    };
    left: 0;    
    z-index: 990;

    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 15% 30% 55%;
    justify-content: center;
    align-items: center;

    background: #0d0d0d;
    transition: 0.3s ease-in-out;   
    opacity: ${
        ({isOpen})=>(isOpen ? '1' : '0' )
    };
`;


export const Icon = styled.div`
    
    justify-self: right;
    
    font-size: 2rem;
    
    background: transparent;
    cursor: pointer;
    outline: none;
`;

export const CloseIcon = styled(FaTimes)`
    color: #fff;
`;



export const SidebarMenu = styled.ul`
    width: 100%;
    height: 100%;
    padding: 0;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`;

export const SidebarMenuItem = styled.button`
    width: 100%;
    padding: 12px 30px;
    border: none;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 1rem;
    color: white;
    
    background-color: transparent;
    cursor: pointer;
    outline: none;
    &:hover{
        border-bottom: 3px solid #01bf71;
    }
`;

export const SideSearchWrap = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;     
`;

export const SideSearchInput = styled(Input)`
    width: 100%;
`;

