// Imports
import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Redux actions
import { 
    setGame, 
    setGameLoading, 
    setGameError, 
    setModal
} from '../../../redux/actions/actionsGames';

// Helpers
import {helpFetch} from '../../../helpers/helpFetch';

// Styled components
import {H4} from '../../AaaGenerics/Texts/Hx';
import {P} from '../../AaaGenerics/Texts/P';
import {
    CardWrapper,
    CardImage
} from "./CardElements";

const Card = ({id, name, image, genres}) => {
    const state = useSelector(state => state)
    const dispatch = useDispatch();
    
    const dataCb = (data)=>dispatch(setGame(data));
    const loadingCb = (value)=>dispatch(setGameLoading(value));
    const errorCb = (errorObj)=>dispatch(setGameError(errorObj));

    const handleImageClick = ()=>{
        helpFetch(`http://localhost:3001/videogame/${id}`,  dataCb, loadingCb, errorCb);
        dispatch(setModal({modal:'infoCard',state:true}))
    };

    useEffect(() => {    
        dispatch(setModal({modal:'loader',state:state.games.loadings.game}))  
    }, [state.games.loadings.game])

    return (
        <>
            <CardWrapper>
                <CardImage src={image} onClick={handleImageClick}/>  
                <P>{genres}</P>
                <H4>{name}</H4>    
            </CardWrapper>
        </>
    )
}

export default Card;
