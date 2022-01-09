import styled  from "styled-components";

const Container = styled.div`
    width: 100%;
    padding: 0 1rem;
    border: none;
    /* border-bottom: 2px solid rgba(255,255,255,0.2); */
    margin:0 ;
    margin-bottom: 6px;

    position: relative;
        
    display: flex;
    flex-direction: ${(props)=>props.flexDir};
    justify-content: center;
    align-items: center;

    @media screen and (min-width: 768px){
        max-width: 700px;
    }
    
    @media screen and (min-width: 1024px){
        max-width: 1000px;
    }
`;

export default Container;