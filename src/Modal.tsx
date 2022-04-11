import React from 'react';

type ModalType = {
    setModalIsOpen: (value:boolean)=>void
    value:string
}

const Modal = ({setModalIsOpen,value}:ModalType) => {
    return (
        <>
            <div className="wrapper-modal" onClick={() => setModalIsOpen(false)}>

            </div>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <div>
                    {value && `input value: ${value}` || 'no input value'}
                </div>
                <div>
                    <button onClick={() => setModalIsOpen(false)}>close</button>
                </div>
            </div>
        </>
    );
};

export default Modal;
