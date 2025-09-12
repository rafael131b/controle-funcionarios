import Header from "@/components/header/header";
import Title from "@/components/title/title";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Table } from "@/components/ui/table";
import { TableList } from "@/components/table/table";
export default function Home() {
  return (
    <div className="w-full">
        <Header/>
      <div className=" mx-auto w-[1180px] ">
        <div className="mt-8">
          <Title title="Controle de Funcionários"  subtitle="Empresa DoQR Tecnologia"/>
        </div>
        <div className="flex justify-between">
          <Input placeholder="Buscar Funcionário..."  className="w-[383px] mt-8"/>
          <Button>+ Adicionar Funcionário</Button>
        </div>
      <div className="mt-3"><TableList /></div>
      </div>
    </div>
  );
}
