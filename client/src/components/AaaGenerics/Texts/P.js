import styled from "styled-components";

export const P = styled.p`
    width:100%;
    height:100%;
    margin:0;
    
    display: flex;
    justify-content:center;
    align-items: center;

    text-align:center;
    color: var(--p-color);
    font-size: var(--p-font-size);
    
`;

export const Pscroll = styled(P)`
    
    padding: 0 8px;
    align-items: flex-start;
    overflow-y:scroll;
    text-align: justify;

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
`;
