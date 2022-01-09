import React from 'react'
import styled from "styled-components";
import video from "../../../assets/fondo3.mp4"

const  Div = styled.div`
    width: 100%;
    height:100%;

    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index:1;

    overflow: hidden;    
`;

const  Video = styled.video`
    width: 100%;
    height: 100%;
    
    -o-object-fit: cover;
    object-fit: cover;
`;

const SectionBgVideo = () => {
    return (
        <>
            <Div>
                <Video autoPlay loop muted src = {video} type = 'video/mp4'/>
            </Div>
        </>
    )
}

export default SectionBgVideo;