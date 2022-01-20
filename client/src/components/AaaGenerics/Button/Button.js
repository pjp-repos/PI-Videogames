import styled from "styled-components";


export const Button = styled.button`
    width: 100%;
    padding: ${({big})=>( big ? '14px 48px' : '10px 20px' )};
    border: none;
    
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: ${({big})=>( big ? '1.25rem' : '1rem' )};
    color:var(--white-color);
    white-space: nowrap;
    text-decoration: none;

    border-radius: 50px;  
    outline: none;
    cursor: pointer;

    background: ${({bgInvert})=>( bgInvert ? 'transparent' : 'var(--first-color)' )};
    transition: all 0.3s ease-in-out;
    &:hover{
        background: ${({bgInvert})=>( bgInvert ? 'var(--first-color)' : 'transparent' )};
    }
    @media screen and (min-width: 768px){
        width: auto;
    }
`;

