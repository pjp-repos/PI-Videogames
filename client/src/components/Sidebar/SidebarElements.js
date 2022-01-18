import styled  from "styled-components";
import {FaTimes} from 'react-icons/fa';
import {Link as LinkR} from 'react-router-dom';

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 990;
    width: 100%;
    height:100%;
    background: #0d0d0d;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;    
    transition: 0.3s ease-in-out;   
    opacity: ${
        ({isOpen})=>(isOpen ? '1' : '0' )
    };
    top: ${
        ({isOpen})=>(isOpen ? '0' : '-100%' )
    };
`;

export const CloseIcon = styled(FaTimes)`
    color: #fff;
`;

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

export const SidebarWapper = styled.div`
    color: #fff;

`;

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6,60px);
    text-align: center;

    @media screen and (min-width: 980px){
        grid-template-rows: repeat(6,80px);
    }

`;

export const SidebarItemBtn = styled.button`
    padding: 12px 30px;
    color: white;
    background-color: transparent;
    font-size: 1rem;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover{
        border-bottom: 3px solid #01bf71;
    }
`;

export const SidebarBtnWrap = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;

`;

export const SidebarRoute = styled(LinkR)`
    border-radius: 50px;    
    white-space: nowrap;
    padding: 16px 64px;    
    font-size: 16px;
    outline: none;
    border: none;
    text-decoration: none;
    cursor: pointer;
    // Transition - Normal state
    transition: all 0.2s ease-in-out;
    background: #01bf71;
    color: #010606;
    // Transition - Hover state
    &:hover{
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`;