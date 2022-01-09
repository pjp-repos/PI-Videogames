// Libraries
import React from 'react';

// Custom hooks
import { useFetch } from '../../../hooks/useFetch';

// Styled components
import { H3 } from '../../AaaGenerics/Texts/Hx';
import {P,Pscroll} from '../../AaaGenerics/Texts/P';
import Spinner from '../../AaaGenerics/Loaders/Spinner/Spinner'
import {
    CardWrapper,
    CardImage
} from "./InfoCardElements";


import helpApiKey from '../../../helpers/helpApiKey';

const InfoCard = ({gameId}) => {
    let apiKey = helpApiKey();

    const {data, error, loading} = useFetch(`https://api.rawg.io/api/games/${gameId}?key=${apiKey}`);

    if(loading) return <Spinner/>;

    let genresString = ""
    data.genres.forEach(el =>{
        genresString=genresString.concat(" ", el.name);
    });

    let platformsString = ""
    data.platforms.forEach(el =>{
        platformsString=platformsString.concat(" ", el.platform.name);
    });

    let infoString = `Released: ${data.released} | Rating: ${data.rating} | Genres: ${genresString} | Platforms: ${platformsString}`;
    return (
        <>
            <CardWrapper>
                <H3>{data.name}</H3>    
                <CardImage src={data.background_image}/>
                <P>{infoString}</P>               
                <Pscroll>{data.description_raw}</Pscroll>               
            </CardWrapper>
        </>
    )
}

export default InfoCard;