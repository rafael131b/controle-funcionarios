import FormUser from "@/components/form/form"
import Title from "@/components/title/title"

const novoUsuario = ()=> {
    return <section>
        <div className="w-[1180px] mx-auto">
            <div className="mt-8">
                <Title title="Novo Funcionário" subtitle="Cadastro de Funcionário" />
            </div>
            <div className="mt-8">
                <FormUser/>
            </div>
        </div>
    </section>
}


export default novoUsuario