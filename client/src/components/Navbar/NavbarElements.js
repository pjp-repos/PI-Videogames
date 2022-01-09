import styled, {css} from 'styled-components';
import { Button } from '../AaaGenerics/Button/Button';



import Sectionsticky from '../AaaGenerics/Sections/SectionSticky';
export const Nav_SectionSticky = styled(Sectionsticky)`
    background-color: #000; 
    height: 80px;
`
   

export const NavWrapper = styled.div`
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items: center;
    height:80px;
    z-index:1;  

`;
export const NavLogo = styled.div`
    height: 70%;
    width: 30%;
    cursor: pointer;
    background-image: url(${(props)=>props.bgimage});
    background-repeat:no-repeat;
    background-size:contain;
    transition: opacity 0.5s ease;
    &:hover{        
        opacity: .75;
    }
`;

export const MobileIcon = styled.div`    
    display: block; 
    position: absolute;
    top: 0px;
    right: 0px;
    /* The translate() CSS function repositions an element 
    in the horizontal and/or vertical directions. */
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color:#fff;
    @media screen and (min-width:768px){
        display:none;
    }
`;

export const NavMenu = styled.ul`
    display: none; 
    @media screen and (min-width:768px){        
        display: flex;
        align-items: center;
        list-style: none;
        text-align: center;
    }
`;

export const NavMenuItem = styled.button`
    height: 75px;
    padding: 0 15px;
    border: none;
    
    display: flex;
    justify-content: center;
    align-items: center;

    color: white;
    font-size: 1rem;
    background-color: transparent;
    outline: none;
    
    cursor: pointer;
    &:hover{
        border-bottom: 3px solid #01bf71;
    }
`;

export const NavSearchWrap = styled.div`
    display: none;
    flex-direction: row;
    align-items: center;
    @media screen and (min-width:768px){
        display: flex; 
    }
`;

export const NavSearchInput = styled.input`
    margin-right: 1rem;
    border: none;
    border-bottom: 2px solid var(--first-color);
    background: transparent;
    color:var(--white-color);
    font-size: 1rem;
`;