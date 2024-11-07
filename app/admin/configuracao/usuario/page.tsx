"use client";
import ButtonPrimary from "@/app/components/buttonprimary";
import Input from "@/app/components/input";
import Modal from "@/app/components/modal";
import Select from "@/app/components/select";
import { showErrorToast, showSuccessToast } from "@/app/components/toasts";
import ConfiguracaoService from "@/app/service/configuracao.service";
import UsuarioService from "@/app/service/usuario.service";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";

export default function Usuario() {
    const [showModal, setShowModal] = useState(false);
    const [isLoading, setIsloading] = useState(false);
    const [isLoadingData, setIsloadingData] = useState(false);

    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const [error, setError] = useState({});
    const [profile, setProfile] = useState([]);
    const [category, setCategory] = useState([]);

    const fetchData = async () => {
        setIsloadingData(true);
        let service = new ConfiguracaoService();
        let listar = await service.profiles();
        if (listar) {
            setProfile(listar);
            setIsloadingData(false);
        } else {
            setIsloadingData(false);
        }
        setProfile(listar);
    };

    const fetchCategory = async () => {
        let service = new ConfiguracaoService();
        let listar = await service.categorias();
        if (listar) {
            setCategory(listar);
            setIsloadingData(false);
        } else {
            setIsloadingData(false);
        }
        setProfile(listar);
    }

    useEffect(() => {
        fetchData();
        fetchCategory();
    }, []);

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

    async function criar() {
        setIsloading(true);
        try {
            if (validar()) {
                let service = new UsuarioService();
                let criar = await service.create(nome, telefone, email, senha);
                if (criar) {
                    showSuccessToast("Usuário criado com sucesso!");
                    limpar();
                    setIsloading(false);
                    setShowModal(false);
                    fetchData();
                } else {
                    showErrorToast("Erro ao criar usuário")
                    setIsloading(false);
                }
            } else {
                setIsloading(false);
            }
        } catch (e) {
            showErrorToast("Erro ao criar usuário");
            console.log(e)
        }

    }

    return (
        <div>
            <div className="d-flex align-items-center justify-content-between" style={{ marginBottom: '0px' }}>
                <div>
                    <h3 style={{ marginBottom: '0px' }}>Usuário</h3>
                </div>
                <div>
                    <ButtonPrimary name="Cadastrar Usuário" entrar={handleOpenModal} />
                    <Modal title="Criar usuário" isOpen={showModal} onClose={handleCloseModal} isLoading={isLoading} criar={criar}>
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
            <ToastContainer />
            <div className="row mt-2">
                <div className="col-md-3">
                    <Input id="nome" label="Nome:" placeholder="Nome do Usuário" name="nome" type="text" />
                </div>
                <div className="col-md-3">
                    <Input id="email" label="Email:" placeholder="Email do Usuário" name="email" type="email" />
                </div>
                <div className="col-md-3">
                    <Input id="telefone" label="telefone:" placeholder="Telefone do Usuário" name="telefone" type="tel" />
                </div>
                <div className="col-md-3">
                    <Select id="data" name="Categoria:" options={category} />
                </div>
            </div>
            <div className="mt-4">
                {isLoadingData ?
                    <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "50vh" }}>
                        <div className="spinner-border spinner-border-lg text-primary" role="status"></div>
                        <h4 className="mt-3">Carregando...</h4>
                    </div>
                    :
                    <div className="mt-2">
                        {
                            !isLoadingData && profile.length > 0 ?
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th scope="col">Nome</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Telefone</th>
                                            <th scope="col">Ações</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {profile.map((item, index) => (
                                            <tr key={index}>
                                                <td>{item.pro_nome}</td>
                                                <td>{item.pro_email}</td>
                                                <td>{item.pro_telefone}</td>
                                                <td>
                                                    <button className="btn btn-danger">Excluir</button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                :
                                null
                        }
                    </div>
                }
            </div>
        </div>
    );
}
