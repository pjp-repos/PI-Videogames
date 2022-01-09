// Libraries
import React, {useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux';
import {FaBars} from 'react-icons/fa'

// Redux actions
import { setGamesFiltered } from '../../redux/actions/actionsGames';

// Custom hooks
import { useFilter } from '../../hooks/useFilter';

// Styled components
import {
    Nav_SectionSticky,
    NavWrapper,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavMenuItem,
    NavSearchWrap,
    NavSearchInput

} from './NavbarElements'
import { Button } from '../AaaGenerics/Button/Button'
import Container from '../AaaGenerics/Sections/Container'

import PokeText from "../../assets/joystickYellow.png"

// Helpers
import { 
    filterCbNameInclude
} from '../../helpers/helpFilterCallbacks';

const initialFilter = {
    name:""
};

const filterCb = {
    name:filterCbNameInclude
};

const Navbar = ({toggle, openFilter, openOrder, openCreate}) => {
    // Redux
    const state = useSelector(state => state);
    const dispatch = useDispatch();

    // useFilter custom hook
    const {      
        filter,
        dataFiltered,
        handleChange,
        handleExecute
    } = useFilter(initialFilter,filterCb,state.games.games);
    
    // Update gamesFiltered global variable
    useEffect(() => {
        dispatch(setGamesFiltered(
            dataFiltered
        ));
    }, [dataFiltered]);

    return (
        <Nav_SectionSticky>
            <Container>
                <NavWrapper>
                    <NavLogo bgimage = {PokeText} to="/"/>
                    <NavMenu>
                        <NavMenuItem onClick={openFilter} >Filter</NavMenuItem>                                          
                        <NavMenuItem onClick={openOrder} >Order</NavMenuItem>
                        <NavMenuItem onClick={openCreate} >Create</NavMenuItem>                        
                    </NavMenu>
                    <NavSearchWrap> 
                        <NavSearchInput
                            type="text" 
                            name="name"
                            value={filter.name}
                            onChange={handleChange}
                        />
                        <Button
                            onClick={handleExecute}
                        >
                            {
                                filter.name===""?"View all":"Search"
                            }                            
                        </Button> 
                    </NavSearchWrap> 
                    <MobileIcon onClick={toggle}> <FaBars/> </MobileIcon>
                </NavWrapper>
            </Container>
        </Nav_SectionSticky>
    )
}

export default Navbar;
