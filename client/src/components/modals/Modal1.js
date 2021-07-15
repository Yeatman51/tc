import React from 'react'

function Modal1() {
    return (
        <div>
            <div className="modal-container">
                <h1 className="modal-title"></h1>
                <img className="modal-img" src="" alt="" />
                <p className="modal-description"></p>
                <h2 className="modal-"></h2>
                <p className="modal--"></p>

            </div>

            <div className="overlay" ref={modalRef} onClick={hideModal}></div>
        </div>
    )
}

export default Modal1
