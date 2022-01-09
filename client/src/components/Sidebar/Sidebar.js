import React from 'react'

import{
    SidebarContainer,
    CloseIcon,
    Icon,
    SidebarWapper,
    SidebarMenu,
    SidebarItemBtn,
    SidebarBtnWrap,
    SidebarRoute
} from './SidebarElements'

const Sidebar = ({isOpen,toggle,openFilter, openOrder, openCreate}) => {
    return (
        <SidebarContainer isOpen={isOpen} >
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWapper>
                <SidebarMenu>
                    <SidebarItemBtn  onClick={openFilter}>
                        Filter
                    </SidebarItemBtn>
                    <SidebarItemBtn  onClick={openOrder}>
                        Order                    
                    </SidebarItemBtn>
                    <SidebarItemBtn onClick={openCreate}>
                        Create
                    </SidebarItemBtn>
                    <SidebarItemBtn >
                        Sign Up
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
