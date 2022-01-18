// Libraries
import React from 'react'
import {useDispatch} from 'react-redux';
import {FaBars} from 'react-icons/fa'
import { Link } from "react-router-dom";

// Redux actions
import { 
    setGames,
    setGamesLoading,
    setGamesError,
    setModal 
} from '../../redux/actions/actionsGames';

// Custom hooks
import { useFilter } from '../../hooks/useFilter';

// Helpers
import { helpFetch } from '../../helpers/helpFetch';

// Styled components
import {
    NavSectionRelative,
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
import Dropdown from '../AaaGenerics/Dropdown/Dropdown';

import navLogo from "../../assets/joystickYellow.png"

// Filed names width default values
const initialForm = {
    name:"",
    origin:'All', // Dropdown non multiple
};

// Field validations
const validationsForm = (form)=>{
    let errors={};
    return errors;
};

const dropDownOptions = [
    {key:'All',value:'Api & Db'},
    {key:'Api',value:'Just Api'},
    {key:'Db',value:'Just Db'},    
]

const Navbar = () => {
    // Redux
    const dispatch = useDispatch();
    const dataCb = (data)=>dispatch(setGames(data));
    const loadingCb = (value)=>dispatch(setGamesLoading(value));
    const errorCb = (errorObj)=>dispatch(setGamesError(errorObj));
    
    const onClickIcon = ()=>dispatch(setModal({modal:'sidebar',state:true}));
    const onClickFilter = ()=>dispatch(setModal({modal:'filterPanel',state:true}));
    const onClickOrder = ()=>dispatch(setModal({modal:'orderPanel',state:true}));
    const onClickCreate = ()=>dispatch(setModal({modal:'createForm',state:true}));

    // useFilter custom hook
    const {      
        form,
        handleChange,
        handleDropdown,
        resetFields,
    } = useFilter(initialForm, validationsForm);
    
    const handleExecute = async()=>{
        console.log(form.origin);
        if(form.name===""){ 
            helpFetch(`http://localhost:3001/videogames?origin=${form.origin}`,  dataCb, loadingCb, errorCb);
        }else{
            helpFetch(`http://localhost:3001/videogames?origin=${form.origin}&name=${form.name}`,  dataCb, loadingCb, errorCb);
        }        
        resetFields();
    };

    return (
        <NavSectionRelative>
            <Container>
                <NavWrapper>
                    <Link to="/">
                        <NavLogo src = {navLogo} alt="logo"/>
                    </Link>
                    <NavMenu>
                        <NavMenuItem onClick={onClickFilter} >Filter</NavMenuItem>                                          
                        <NavMenuItem onClick={onClickOrder} >Order</NavMenuItem>
                        <NavMenuItem onClick={onClickCreate} >Create</NavMenuItem>                        
                    </NavMenu>
                    <NavSearchWrap> 
                        <NavSearchInput
                            type="text" 
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                        />
                        <Dropdown 
                            options={dropDownOptions}
                            titleOn="Origin"
                            titleOff="Close"
                            multiple={false}
                            
                            fieldName='origin'
                            fieldValue = {form.origin}
                            dropdownCb={handleDropdown}
                        />
                        <Button
                            onClick={handleExecute}
                        >
                            {
                                form.name!==""||form.origin!=='All'?"Search":"Reload"
                            }                            
                        </Button> 
                    </NavSearchWrap> 
                    <MobileIcon onClick={onClickIcon}> <FaBars/> </MobileIcon>
                </NavWrapper>
            </Container>
        </NavSectionRelative>
    )
}

export default Navbar;
