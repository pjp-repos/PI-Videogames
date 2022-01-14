// Libraries
import React from 'react';
import {useSelector} from 'react-redux';

// Styled components
import { H3 } from '../../AaaGenerics/Texts/Hx';
import {P,Pscroll} from '../../AaaGenerics/Texts/P';
import Spinner from '../../AaaGenerics/Loaders/Spinner/Spinner'
import {
    CardWrapper,
    CardImage
} from "./InfoCardElements";

const InfoCard = () => {
    const state = useSelector(state => state);

    if(state.games.loadings.game) return <Spinner/>;

    return (
        <>
            <CardWrapper>
                <H3>{state.games.game.name}</H3>    
                <CardImage src={state.games.game.background_image}/>
                <P>{state.games.game.infoString}</P>               
                <Pscroll>{state.games.game.description_raw}</Pscroll>               
            </CardWrapper>
        </>
    )
}

export default InfoCard;