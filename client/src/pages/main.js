// Custom hooks and helpers
import { useModal } from '../hooks/useModal';

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

function Main() {
   
    // === Modal hooks ==== 
    const sidebar = useModal();
    const modalFilter = useModal();
    const modalOrder = useModal();
    const modalCreate = useModal();
    const modalInfo = useModal();

    return (
        <>
            {/* <GlobalStyle/>  */}
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
                <FilterPanel closeModal={modalFilter.closeModal}/>
            </Modal> 

            <Modal show={modalOrder.isOpen} closeModal={modalOrder.closeModal}>
                <OrderPanel closeModal={modalOrder.closeModal}/>
            </Modal>

            <Modal show={modalCreate.isOpen} closeModal={modalCreate.closeModal}>
                <CreateForm closeModal={modalCreate.closeModal}/>
            </Modal> 

            <Modal show={modalInfo.isOpen} closeModal={modalInfo.closeModal}>
                <InfoCard/>
            </Modal> 
        </> 
    );
}

export default Main;