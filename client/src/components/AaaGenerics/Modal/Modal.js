import React from 'react'
import{
    ModalBg,
    ModalWrapper
} from './ModalElements'

const Modal = ({show,children}) => {
    // if(!show) return null;
    return (  
        <ModalBg show={show}>
            <ModalWrapper >
                    {children}
            </ModalWrapper>
        </ModalBg>
    )
}

export default Modal
