// Imports
import React from 'react';
import { useDispatch } from 'react-redux';

// Redux actions
import { 
    setGame, 
    setGameLoading, 
    setGameError, 
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



const Card = ({id, name, image, genres, showModalInfo}) => {
    const dispatch = useDispatch();
    const dataCb = (data)=>dispatch(setGame(data));
    const loadingCb = (value)=>dispatch(setGameLoading(value));
    const errorCb = (errorObj)=>dispatch(setGameError(errorObj));

    const handleImageClick = ()=>{
        helpFetch(`http://localhost:3001/videogame/${id}`,  dataCb, loadingCb, errorCb);
        showModalInfo();
    };

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
