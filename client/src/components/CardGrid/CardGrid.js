// Libraries
import React, {useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';

// Redux actions
import { setGames,setGamesFiltered } from '../../redux/actions/actionsGames';

// Custom hooks
import { useFetch } from '../../hooks/useFetch';

import helpApiKey from '../../helpers/helpApiKey';

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
} from './CardGridElements';


const CardGrid = ({showModalInfo}) => {
    const state = useSelector(state => state);
    const dispatch = useDispatch();

    let games = state.games.gamesPaginated;
   
    let apiKey = helpApiKey();
    const page1 = useFetch(`https://api.rawg.io/api/games?key=${apiKey}&page=1`);
    const page2 = useFetch(`https://api.rawg.io/api/games?key=${apiKey}&page=2`);
    const page3 = useFetch(`https://api.rawg.io/api/games?key=${apiKey}&page=3`);
    const page4 = useFetch(`https://api.rawg.io/api/games?key=${apiKey}&page=4`);
    const page5 = useFetch(`https://api.rawg.io/api/games?key=${apiKey}&page=5`);

    let loading = page1.loading || page2.loading || page3.loading || page4.loading || page5.loading;
    
    useEffect(() => {
        let data =[];
        if (!loading){
            data = page1.data.results.concat(
                page2.data.results,
                page3.data.results,
                page4.data.results,
                page5.data.results
            );
        };
        dispatch(setGames(data));
        dispatch(setGamesFiltered(data));

    }, [loading])

    if (loading) return(
        <SectionRelative>
            <SectionBgGradient/>
            <SectionBgVideo/>
            <Container flexDir="column">
                <Spinner/>            
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
                        games.map((game)=>{
                            
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
                                    showModalInfo={()=>showModalInfo({gameId:game.id})}
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
