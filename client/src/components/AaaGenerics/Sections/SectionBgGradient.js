
import styled  from "styled-components";

const SectionBgGradient = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: linear-gradient(180deg,rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%),
    linear-gradient(180deg,rgba(0,0,0,0.2) 0%, transparent 100%);
    z-index: 2;
`;

export default SectionBgGradient;