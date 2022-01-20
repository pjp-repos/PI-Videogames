import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

// Redux actions
import { 
    setGames,
    setGamesLoading,
    setGamesError,
    setModal 
} from '../../redux/actions/actionsGames';

// Custom hooks
import { useForm } from '../../hooks/useForm';

// Helpers
import { helpFetch } from '../../helpers/helpFetch';

// Styled components
import{
    SidebarContainer,
    CloseIcon,
    Icon,
    SidebarMenu,
    SidebarMenuItem,
    SideSearchWrap,
    SideSearchInput

} from './SidebarElements'
import { Button } from '../AaaGenerics/Button/Button'
import Dropdown from '../AaaGenerics/Dropdown/Dropdown';

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

const Sidebar = () => {
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    const dataCb = (data)=>dispatch(setGames(data));
    const loadingCb = (value)=>dispatch(setGamesLoading(value));
    const errorCb = (errorObj)=>dispatch(setGamesError(errorObj));

    const onClickIcon = ()=>dispatch(setModal({modal:'sidebar',state:false}));
    const onClickFilter = ()=>dispatch(setModal({modal:'filterPanel',state:true}));
    const onClickOrder = ()=>dispatch(setModal({modal:'orderPanel',state:true}));
    const onClickCreate = ()=>dispatch(setModal({modal:'createForm',state:true}));

    // useFilter custom hook
    const {      
        form,
        handleChange,
        handleDropdown,
        resetFields,
    } = useForm(initialForm, validationsForm);
    
    const handleExecute = async()=>{
        console.log(form.origin);
        if(form.name===""){ 
            helpFetch(`http://localhost:3001/videogames?origin=${form.origin}`,  dataCb, loadingCb, errorCb);
        }else{
            helpFetch(`http://localhost:3001/videogames?origin=${form.origin}&name=${form.name}`,  dataCb, loadingCb, errorCb);
        }        
        resetFields();
        onClickIcon();
    };

    return (
        <SidebarContainer isOpen={state.games.modals.sidebar} >
            {/* <SidebarWapper> */}
                <Icon onClick={onClickIcon}>
                    <CloseIcon/>
                </Icon>
                <SidebarMenu>
                    <SidebarMenuItem  onClick={onClickFilter}>Filter</SidebarMenuItem>
                    <SidebarMenuItem  onClick={onClickOrder}>Order</SidebarMenuItem>
                    <SidebarMenuItem onClick={onClickCreate}>Create</SidebarMenuItem>
                </SidebarMenu>
                <SideSearchWrap> 
                    <SideSearchInput
                        type="text" 
                        name="name"
                        placeholder="Name include..."
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
                </SideSearchWrap> 
            {/* </SidebarWapper>             */}
        </SidebarContainer>
    )
}

export default Sidebar
