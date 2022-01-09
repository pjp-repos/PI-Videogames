// Libraries
import React, {useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';

// Redux actions
import { setGamesPaginated } from '../../redux/actions/actionsGames';

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

    // Customizing params for usePaginator
    const elementsFirsPage = 15;
    const elemensPerPage = 15;
    const arrayToPaginate = state.games.gamesFiltered;
    const arrayToPaginateLength = arrayToPaginate.length

    const {
        page, 
        maxPages,
        pageList, 
        firstIndex, 
        lastIndex,  
        isFirst, 
        isLast, 
        handlePrevious,
        handleNext,
        handleSelect
    }= usePaginator(arrayToPaginateLength,elementsFirsPage,elemensPerPage)

    // Update paginator global variable
    useEffect(() => {
        dispatch(setGamesPaginated(
            arrayToPaginate.slice(firstIndex,lastIndex)
        ));
    }, [page,arrayToPaginateLength]);

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
                    <PaginatorSelectWrapp> 
                        <PaginatorSelectText>Page</PaginatorSelectText>
                        <PaginatorSelectDropdown name="select" onChange={handleSelect} value={page}>
                            {
                                pageList.map(el=>(
                                    <option key={el}>
                                        {el}
                                    </option> 
                                ))
                            }
                        </PaginatorSelectDropdown>
                        <PaginatorSelectText>{` of ${maxPages}`}</PaginatorSelectText>
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
