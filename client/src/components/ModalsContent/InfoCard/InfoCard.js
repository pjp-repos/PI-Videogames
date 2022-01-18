// Libraries
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
// Actions
import { setModal } from '../../../redux/actions/actionsGames';

// Styled components
import { H3 } from '../../AaaGenerics/Texts/Hx';
import {P,Pscroll} from '../../AaaGenerics/Texts/P';

import {
    CardWrapper,
    CardImage
} from "./InfoCardElements";

const InfoCard = () => {
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    const closeModal=()=>dispatch(setModal({modal:'infoCard',value:false}));
   
    return (
        <>
            <CardWrapper>
                <H3>{state.games.game.name}</H3>    
                <CardImage src={state.games.game.background_image} onClick={closeModal}/>
                <P>{state.games.game.infoString}</P>               
                <Pscroll>{state.games.game.description_raw}</Pscroll>           
            </CardWrapper>
        </>
    )
}

export default InfoCard;