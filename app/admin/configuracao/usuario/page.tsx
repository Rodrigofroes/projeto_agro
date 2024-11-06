import ButtonPrimary from "@/app/components/buttonprimary";

export default function Usuario() {
    return (
        <div>
            <div className="d-flex align-items-center justify-content-between" style={{ marginBottom: '0px' }}>
                <div>
                    <h3 style={{ marginBottom: '0px' }}>Usuário</h3>
                </div>
                <div>
                    <ButtonPrimary  name="Cadastrar Usuário" />
                </div>
            </div>
            <hr style={{ marginTop: '5px', marginBottom: '5px' }} />
        </div>
    );
}
