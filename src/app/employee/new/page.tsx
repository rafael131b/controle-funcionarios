import FormUser from "@/components/form/form"
import Title from "@/components/title/title"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const novoUsuario = ()=> {
    return <section>
        <div className="w-[1180px] mx-auto">
            <div className="mb-4 mt-8">
                <Link href="/" className="flex items-center text-[#0B0B0C] font-sans font-bold text-base leading-none tracking-normal hover:text-gray-700 cursor-pointer">
                    <ArrowLeft className="mr-2 h-4 w-4 text-[#0B0B0C]" />
                    Voltar
                </Link>
            </div>
            <div className="mt-8">
                <Title title="Novo Funcionário" subtitle="Empresa DoQR Tecnologia" />
            </div>
            <div className="mt-8">
                <FormUser/>
            </div>
        </div>
    </section>
}


export default novoUsuario