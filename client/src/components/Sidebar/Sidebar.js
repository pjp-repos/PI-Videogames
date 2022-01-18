import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
// Redux actions
import { setModal } from '../../redux/actions/actionsGames';
// Styled components
import{
    SidebarContainer,
    CloseIcon,
    Icon,
    SidebarWapper,
    SidebarMenu,
    SidebarItemBtn,
} from './SidebarElements'

const Sidebar = () => {
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    const onClickIcon = ()=>dispatch(setModal({modal:'sidebar',state:false}));
    const onClickFilter = ()=>dispatch(setModal({modal:'filterPanel',state:true}));
    const onClickOrder = ()=>dispatch(setModal({modal:'orderPanel',state:true}));
    const onClickCreate = ()=>dispatch(setModal({modal:'createForm',state:true}));
    return (
        <SidebarContainer isOpen={state.games.modals.sidebar} >
            <Icon onClick={onClickIcon}>
                <CloseIcon/>
            </Icon>
            <SidebarWapper>
                <SidebarMenu>
                    <SidebarItemBtn  onClick={onClickFilter}>
                        Filter
                    </SidebarItemBtn>
                    <SidebarItemBtn  onClick={onClickOrder}>
                        Order                    
                    </SidebarItemBtn>
                    <SidebarItemBtn onClick={onClickCreate}>
                        Create
                    </SidebarItemBtn>
                </SidebarMenu>
                {/* <SidebarBtnWrap>
                    <SidebarRoute to="/signin">
                        Sign In
                    </SidebarRoute>
                </SidebarBtnWrap> */}
            </SidebarWapper>            
        </SidebarContainer>
    )
}

export default Sidebar
