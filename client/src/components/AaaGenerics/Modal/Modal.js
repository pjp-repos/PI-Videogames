import React from 'react'
import{
    ModalBg,
    ModalWrapper,
    ModalcloseBtn
} from './ModalElements'

const Modal = ({show,closeModal,children}) => {
    // if(!show) return null;
    return (  
        <ModalBg show={show}>
            <ModalWrapper >
                <ModalcloseBtn aria-label='Close' onClick={closeModal}/>   
                    {children}
            </ModalWrapper>
        </ModalBg>
    )
}

export default Modal
