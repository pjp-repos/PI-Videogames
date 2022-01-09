import styled from "styled-components";

export const CardGridWrapper = styled.div`
    width: 100%;
    padding-bottom:0.5rem;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 10px;
    justify-content: center;
    justify-items: center;
   
    @media screen and (min-width: 768px){
        grid-template-columns: repeat(3, 1fr);
    }

    @media screen and (min-width: 1024px){
        grid-template-columns:repeat(4, 1fr);
    }
`;


