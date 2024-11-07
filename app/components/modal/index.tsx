import React, { ReactNode } from 'react';

interface ModalProps {
    title: string;
    isOpen: boolean;
    onClose: () => void;
    children?: ReactNode;
    criar: () => void;
    isLoading?: boolean
}

export default function Modal({ title, isOpen, onClose, children, criar, isLoading }: ModalProps) {
    return (
        <>
            {isOpen && (
                <div className={`modal fade ${isOpen ? 'show' : ''}`} tabIndex={-1} role="dialog" style={{ display: 'block' }}>
                    <div className="modal-dialog large" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{title}</h5>
                            </div>
                            <div className="modal-body">
                                {children}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={onClose}>
                                    Fechar
                                </button>
                                <button type="button" className="btn btn-primary" onClick={criar}>
                                    {isLoading ? (
                                        <div className="spinner-border spinner-border-sm" role="status">
                                        </div>
                                    ) : (
                                        'Criar'
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Overlay de fundo para o modal */}
            {isOpen && (
                <div className="modal-backdrop fade show" onClick={onClose}></div>
            )}
        </>
    );
}

