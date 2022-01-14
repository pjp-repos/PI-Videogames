// Libraries
import React from 'react';
import {useSelector,useDispatch} from 'react-redux';

// Redux actions
import { paginateGames } from '../../redux/actions/actionsGames';

// Custom hooks
import { usePaginator } from '../../hooks/usePaginator';

// Styled components
import {
    Paginator_Section,
    PaginatorWrapper,
    PaginatorSelectWrapp,
    PaginatorSelectText,
    PaginatorSelectDropdown,
    Paginator_Button
} from './PaginatorElements'
import Container from '../AaaGenerics/Sections/Container';

const Paginator = () => {
    // Redux
    const state = useSelector(state => state);
    const dispatch = useDispatch();

    // Params for usePaginator
    const elementsFirsPage = state.games.pagination.firstPage;
    const elemensPerPage = state.games.pagination.nextPages;
    const arrayLength = state.games.gamesOrdered.length;
    const paginatorCb = (page)=>dispatch(paginateGames(page));
    const {
        page, 
        maxPages,
        pageList, 
        isFirst, 
        isLast, 
        handlePrevious,
        handleNext,
        handleSelect
    }= usePaginator(arrayLength,elementsFirsPage,elemensPerPage,paginatorCb)

    return (
        <Paginator_Section>
            <Container>
                <PaginatorWrapper>
                    <Paginator_Button 
                        name="previous" 
                        isDisabled={isFirst} 
                        onClick={handlePrevious}
                        bgInvert
                    >
                        {`<<`}
                    </Paginator_Button>                    
                    <PaginatorSelectWrapp anyProp={state.games.gamesOrdered.length}> 
                        <PaginatorSelectText>Page:</PaginatorSelectText>
                        <PaginatorSelectDropdown name="select" onChange={handleSelect} value={page}>
                            {
                                pageList.map(el=>(
                                    <option key={el}>
                                        {el}
                                    </option> 
                                ))
                            }
                        </PaginatorSelectDropdown>
                        <PaginatorSelectText>{`of ${maxPages}`}</PaginatorSelectText>
                    </PaginatorSelectWrapp>
                    <Paginator_Button 
                        name="next" 
                        isDisabled={isLast} 
                        onClick={handleNext}
                        bgInvert
                    >
                        {`>>`}
                    </Paginator_Button>
                </PaginatorWrapper>
            </Container>
        </Paginator_Section>
    )
}; 

export default Paginator
