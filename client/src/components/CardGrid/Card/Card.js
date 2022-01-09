
import React from 'react';

import {H4} from '../../AaaGenerics/Texts/Hx';
import {P} from '../../AaaGenerics/Texts/P';
import {
    CardWrapper,
    CardImage
} from "./CardElements";

// import MyImg from '../../assets/poke.svg'

const Card = ({id, name, image, genres, showModalInfo}) => {
    return (
        <>
            <CardWrapper>
                <CardImage src={image} onClick={showModalInfo}/>  
                <P>{genres}</P>
                <H4>{name}</H4>    
            </CardWrapper>
        </>
    )
}

export default Card;
