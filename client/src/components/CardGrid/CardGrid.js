// Libraries
import React, {useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';

// Redux actions
import { 
    setGames, 
    setGamesLoading,
    setGamesError, 
    setGenres, 
    setGenresLoading,
    setGenresError, 
    setPlatforms, 
    setPlatformsLoading,
    setPlatformsError, 
} from '../../redux/actions/actionsGames';

// Helpers
import {helpFetch} from '../../helpers/helpFetch'

// Styled components (external)
import SectionRelative from '../AaaGenerics/Sections/SectionRelative';
import SectionBgGradient from '../AaaGenerics/Sections/SectionBgGradient';
import SectionBgVideo from '../AaaGenerics/Sections/SectionBgVideo';
import Container from '../AaaGenerics/Sections/Container';
import Spinner from '../AaaGenerics/Loaders/Spinner/Spinner';
import Card from './Card/Card';

// Styled components (internal)
import { 
    CardGridWrapper,
    CardGridLoaderWrapper
} from './CardGridElements';

const CardGrid = ({showModalInfo}) => {
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    // Games
    const dataCbGames = (data)=>dispatch(setGames(data));
    const loadingCbGames = (value)=>dispatch(setGamesLoading(value));
    const errorCbGames = (errorObj)=>dispatch(setGamesError(errorObj));
    // Genres
    const dataCbGenres = (data)=>dispatch(setGenres(data));
    const loadingCbGenres = (value)=>dispatch(setGenresLoading(value));
    const errorCbGenres = (errorObj)=>dispatch(setGenresError(errorObj));
    // Platforms
    const dataCbPlatforms = (data)=>dispatch(setPlatforms(data));
    const loadingCbPlatforms = (value)=>dispatch(setPlatformsLoading(value));
    const errorCbPlatforms = (errorObj)=>dispatch(setPlatformsError(errorObj));

    useEffect(() => {
        helpFetch(`http://localhost:3001/videogames`,  dataCbGames, loadingCbGames, errorCbGames);
        helpFetch(`http://localhost:3001/genres`,  dataCbGenres, loadingCbGenres, errorCbGenres);
        helpFetch(`http://localhost:3001/platforms`,  dataCbPlatforms, loadingCbPlatforms, errorCbPlatforms);
    }, [])

  
    if (state.games.loadings.games) return(
        <SectionRelative>
            <SectionBgGradient/>
            <SectionBgVideo/>
            <Container flexDir="column">
                <CardGridLoaderWrapper>
                    <Spinner/>
                </CardGridLoaderWrapper>
            </Container>
        </SectionRelative>
    )    

    return (

        <SectionRelative>
            <SectionBgGradient/>
            <SectionBgVideo/>
            <Container flexDir="column">                
                <CardGridWrapper>
                    {
                        state.games.gamesPaginated.map((game)=>{
                            
                                let genresString = ""
                                game.genres.forEach(el =>{
                                    genresString=genresString.concat(" ", el.name);
                                });

                            return(
                                <Card key={game.id} 
                                    id={game.id}
                                    name={game.name} 
                                    image = {game.background_image}
                                    genres = {genresString.slice(1)}
                                    showModalInfo={showModalInfo}
                                />
                            )
                        })
                    }                                    
                </CardGridWrapper>                 
            </Container>
        </SectionRelative>
    )
}

export default CardGrid;
