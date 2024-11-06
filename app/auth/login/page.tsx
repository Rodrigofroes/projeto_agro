"use client";
import ButtonLink from "@/app/components/buttonlink";
import ButtonPrimary from "@/app/components/buttonprimary";
import Input from "@/app/components/input";
import ToastNotification from "@/app/components/toasts";
import { showErrorToast, showSuccessToast } from "@/app/components/toasts";
import UsuarioService from "@/app/service/usuario.service";
import { useRouter } from "next/navigation"
import { useState } from "react";

export default function Login() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [fogortSenha, setForgotSenha] = useState(false);
    const [error, setError] = useState({});

    function validar() {
        const novoErro = {};
        const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;

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

    async function login() {
        setIsLoading(true);

        try {
            if (validar()) {
                const user = new UsuarioService();
                const login = await user.login(email, senha);
                if (login) {

                    showSuccessToast("Autenticado com sucesso!");
                    router.push("/admin");
                    limpar();
                } else {
                    showErrorToast("Email ou senha inválidos");
                }
                setIsLoading(false);
            } else {
                setIsLoading(false);
            }
        } catch (error) {
            showErrorToast("Erro ao realizar login");
        }

    }

    function fogortsenha() {
        setForgotSenha(true);
    }

    function validarEmail() {
        const novoErro = {};
        const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;

        if (!email) {
            novoErro.email = "*Campo obrigatório";
        } else if (!regexEmail.test(email)) {
            novoErro.email = "*Email inválido";
        }

        setError(novoErro);

        return Object.keys(novoErro).length === 0;

    }

    function limpar() {
        setEmail("");
        setSenha("");
    }

    async function recuperar() {
        setIsLoading(true);
        try {
            if (validarEmail()) {
                const user = new UsuarioService();
                const forgot = await user.forgotPassword(email);
                if (forgot) {
                    showSuccessToast("Email enviado com sucesso!");
                    limpar();
                    setForgotSenha(false);
                    setIsLoading(false);
                } else {
                    showErrorToast("Erro ao enviar email");
                    setIsLoading(false);
                }
            }
        } catch (e) {
            showErrorToast("Erro ao enviar email");
            setIsLoading(false);
        }
    }


    return (
        <div className="login-box container d-flex justify-content-center align-items-center vh-100">
            <div className="card card-outline card-primary" style={{ maxWidth: "400px", width: "100%" }}>
                <div className="card-header text-center">
                    <a className="link-dark text-center link-offset-2 link-opacity-100 link-opacity-50-hover">
                        <h1 className="mb-0"> <b>AGRO</b> COLETA </h1>
                    </a>
                </div>
                <div className="card-body login-card-body">
                    <p className="login-box-msg text-center">
                        {fogortSenha ? "Digite seu email para recuperar sua senha" : "Faça login para iniciar sua sessão"}
                    </p>
                    <div className=" mb-1">
                        {fogortSenha ?

                            <>
                                <div className="mb-2">
                                    <Input
                                        label="Email:"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        name="email"
                                        id="email"
                                        placeholder="Digite seu email"
                                    />
                                </div>
                                <div>
                                    {error.email && <div className="text-danger">{error.email}</div>}
                                </div>
                            </>
                            :
                            <>
                                <div className="mb-2">
                                    <Input
                                        label="Email:"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        name="email"
                                        id="email"
                                        placeholder="Digite seu email"
                                    />
                                </div>
                                <div>
                                    {error.email && <div className="text-danger">{error.email}</div>}
                                </div>
                                <div className="mb-1">
                                    <div className="mb-2">
                                        <Input
                                            label="Senha:"
                                            type="password"
                                            value={senha}
                                            onChange={(e) => setSenha(e.target.value)}
                                            name="senha"
                                            id="senha"
                                            placeholder="Digite sua senha"
                                            isPassword={true}
                                        />
                                    </div>
                                    <div>
                                        {error.senha && <div className="text-danger">{error.senha}</div>}
                                    </div>
                                </div>
                            </>
                        }
                    </div>
                    <div className="d-flex justify-content-end">
                        <div className="text-end mb-4">
                            {fogortSenha ?
                                <ButtonLink text="Voltar" senha={() => setForgotSenha(false)} />
                                :
                                <ButtonLink text="Esqueceu a senha?" senha={fogortsenha} />
                            }
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="d-grid gap-2">
                                {
                                    fogortSenha ?
                                        <ButtonPrimary name="Recuperar" entrar={recuperar} isLoading={isLoading} />
                                        :
                                        <ButtonPrimary name="Entrar" entrar={login} isLoading={isLoading} />
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastNotification />
        </div>

    );
}