"use client";
import React, { useState } from 'react';

export default function Modal() {
    const [show, setShow] = useState(false);

    const handleOpen = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <>
            {/* Botão para abrir o modal */}
            <button type="button" className="btn btn-primary" onClick={handleOpen}>
                Launch demo modal
            </button>

            {/* Modal */}
            {show && (
                <div className={`modal fade `} tabIndex={-1} role="dialog" style={{ display: 'block' }}>
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Modal title</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    aria-label="Close"
                                    onClick={handleClose}
                                >
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>Este é o conteúdo do modal.</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={handleClose}>
                                    Close
                                </button>
                                <button type="button" className="btn btn-primary">
                                    Save changes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Overlay de fundo para o modal */}
            {show && (
                <div className="modal-backdrop fade show" onClick={handleClose}></div>
            )}
        </>
    );
}
