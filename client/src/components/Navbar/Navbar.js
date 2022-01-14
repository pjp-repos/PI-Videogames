// Libraries
import React from 'react'
import {useDispatch} from 'react-redux';
import {FaBars} from 'react-icons/fa'
import { Link } from "react-router-dom";

// Redux actions
import { 
    setGames,
    setGamesLoading,
    setGamesError 
} from '../../redux/actions/actionsGames';

// Custom hooks
import { useFilter } from '../../hooks/useFilter';

// Helpers
import { helpFetch } from '../../helpers/helpFetch';

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

import navLogo from "../../assets/joystickYellow.png"

const initialFilter = {
    name:""
};

const Navbar = ({toggle, openFilter, openOrder, openCreate}) => {
    // Redux
    const dispatch = useDispatch();
    const dataCb = (data)=>dispatch(setGames(data));
    const loadingCb = (value)=>dispatch(setGamesLoading(value));
    const errorCb = (errorObj)=>dispatch(setGamesError(errorObj));
    
    // useFilter custom hook
    const {      
        filter,
        handleChange,
        resetFilter,
    } = useFilter(initialFilter);
    
    const handleExecuteFilter = async()=>{

        if(filter.name===""){
            helpFetch(`http://localhost:3001/videogames`,  dataCb, loadingCb, errorCb);
        }else{
            helpFetch(`http://localhost:3001/videogames?name=${filter.name}`,  dataCb, loadingCb, errorCb);
        }        
        resetFilter();
    };

    return (
        <Nav_SectionSticky>
            <Container>
                <NavWrapper>
                    <Link to="/">
                        <NavLogo src = {navLogo} alt="logo"/>
                    </Link>
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
                            onClick={handleExecuteFilter}
                        >
                            {
                                filter.name===""?"Reset":"Search"
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
