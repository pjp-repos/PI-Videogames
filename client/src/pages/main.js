import { useSelector } from 'react-redux';

// Styled components
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import Paginator from '../components/Paginator/Paginator';
import CardGrid from "../components/CardGrid/CardGrid";
import Modal from '../components/AaaGenerics/Modal/Modal';
import InfoCard from '../components/ModalsContent/InfoCard/InfoCard';
import CreateForm from '../components/ModalsContent/CreateForm/CreateForm';
import FilterPanel from '../components/ModalsContent/FilterPanel/FilterPanel';
import OrderPanel from '../components/ModalsContent/OrderPanel/OrderPanel';
import Spinner from '../components/AaaGenerics/Loaders/Spinner/Spinner';


function Main() {
    const state = useSelector(state => state)

    return (
        <>
            <Sidebar/>
            <Navbar />
            <Paginator/>
            <CardGrid/>               

            <Modal show={state.games.modals.filterPanel}>
                <FilterPanel/>
            </Modal> 

            <Modal show={state.games.modals.orderPanel}>
                <OrderPanel/>
            </Modal>

            <Modal show={state.games.modals.createForm}>
                <CreateForm/>
            </Modal> 

            <Modal show={state.games.modals.infoCard}>
                <InfoCard/>
            </Modal>

            <Modal show={state.games.modals.loader}>
                <Spinner/>
            </Modal> 
        </> 
    );
}

export default Main;