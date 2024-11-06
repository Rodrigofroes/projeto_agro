"use client";
import ButtonPrimary from "@/app/components/buttonprimary";
import Input from "@/app/components/input";
import Modal from "@/app/components/modal";
import { useState } from "react";

export default function Usuario() {
    const [showModal, setShowModal] = useState(false);

    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const [error, setError] = useState({});

    function limpar() {
        setNome("");
        setEmail("");
        setSenha("");
        setTelefone("");
    }

    function handleCloseModal() {
        limpar();
        setError({});
        setShowModal(false);
    }

    const handleOpenModal = () => setShowModal(true);

    function validar() {
        const novoErro = {};
        const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;

        if (!nome) {
            novoErro.nome = "*Campo obrigatório";
        }

        if (!telefone) {
            novoErro.telefone = "*Campo obrigatório";
        }

        if (!email) {
            novoErro.email = "*Campo obrigatório";
        } else if (!regexEmail.test(email)) {
            novoErro.email = "*Email inválido";
        }

        if (!senha) {
            novoErro.senha = "*Campo obrigatório";
        }

        setError(novoErro);

        return Object.keys(novoErro).length === 0;
    }

    function criar() {
        if (validar()) {
            console.log("Passou");
        }
        console.log("Não passou");
    }

    return (
        <div>
            <div className="d-flex align-items-center justify-content-between" style={{ marginBottom: '0px' }}>
                <div>
                    <h3 style={{ marginBottom: '0px' }}>Usuário</h3>
                </div>
                <div>
                    <ButtonPrimary name="Cadastrar Usuário" entrar={handleOpenModal} />
                    <Modal title="Criar usuário" isOpen={showModal} onClose={handleCloseModal} criar={criar}>
                        <div className="row">
                            <div className="col-md-6">
                                <Input id="nome" label="Nome Completo:" value={nome} onChange={(e) => setNome(e.target.value)} name="nome" type="text" placeholder="João Silva" />
                                <div>
                                    {error.nome && <div className="text-danger">{error.nome}</div>}
                                </div>
                            </div>

                            <div className="col-md-6">
                                <Input id="telefone" label="Telefone:" value={telefone} onChange={(e) => setTelefone(e.target.value)} name="telefone" type="tel" placeholder="00 00000-0000" />
                                <div>
                                    {error.telefone && <div className="text-danger">{error.telefone}</div>}
                                </div>
                            </div>

                        </div>
                        <div className="row mt-2">
                            <div className="col-md-6">
                                <Input id="email" label="Email:" value={email} onChange={(e) => setEmail(e.target.value)} name="email" type="email" placeholder="João@exemplo.com" />
                                <div>
                                    {error.email && <div className="text-danger">{error.email}</div>}
                                </div>
                            </div>

                            <div className="col-md-6">
                                <Input id="senha" label="Senha:" value={senha} onChange={(e) => setSenha(e.target.value)} name="telefone2" type="password" isPassword={true} placeholder="Senha" />
                                <div>
                                    {error.senha && <div className="text-danger">{error.senha}</div>}
                                </div>
                            </div>

                        </div>
                    </Modal>
                </div>
            </div>
            <hr style={{ marginTop: '5px', marginBottom: '5px' }} />
        </div>
    );
}
