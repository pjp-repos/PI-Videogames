// Dependences
import React, {useEffect, useState} from 'react';
import {Provider} from 'react-redux';
import { GlobalStyle } from './components/AaaGenerics/GlobalStyles/GlobalStyles';

// Redux store
import store from './redux/store';

// Custom hooks and helpers
import { useModal } from './hooks/useModal';

// Styled components
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Paginator from './components/Paginator/Paginator';
import CardGrid from "./components/CardGrid/CardGrid";
import Modal from './components/AaaGenerics/Modal/Modal';
import InfoCard from './components/ModalsContent/InfoCard/InfoCard';
import CreateForm from './components/ModalsContent/CreateForm/CreateForm';
import FilterPanel from './components/ModalsContent/FilterPanel/FilterPanel';

const apiKey = 'd5b6b56a292f4a288c0bdef50c56a055';


function App() {
   
    // === Modal hooks ==== 
    const sidebar = useModal();
    const modalFilter = useModal();
    const modalOrder = useModal();
    const modalCreate = useModal();
    const modalInfo = useModal();

    return (
        <Provider store={store}>       
            <>
                <GlobalStyle/> 
                <Sidebar isOpen={sidebar.isOpen} toggle={sidebar.closeModal}
                    openFilter={modalFilter.openModal} 
                    openOrder={modalOrder.openModal}
                    openCreate={modalCreate.openModal}
                />
                <Navbar toggle={sidebar.openModal} 
                    openFilter={modalFilter.openModal} 
                    openOrder={modalOrder.openModal}
                    openCreate={modalCreate.openModal}
                />
                <Paginator/>
                <CardGrid showModalInfo={modalInfo.openModal}/>               

                <Modal show={modalFilter.isOpen} closeModal={modalFilter.closeModal}>
                    <FilterPanel/>
                </Modal>   
                <Modal show={modalOrder.isOpen} closeModal={modalOrder.closeModal}/>

                <Modal show={modalCreate.isOpen} closeModal={modalCreate.closeModal}>
                    <CreateForm/>
                </Modal> 

                <Modal show={modalInfo.isOpen} closeModal={modalInfo.closeModal}>
                    <InfoCard gameId={modalInfo.params.gameId}/>
                </Modal> 
            </>
        </Provider>
    );
}

export default App;

