"use client"
import Header from "@/components/header/header";
import Title from "@/components/title/title";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Table } from "@/components/ui/table";
import { TableList } from "@/components/table/table";
import { useEmployees } from "@/hooks/useEmployee";
import Image from "next/image";
export default function Home() {

const {employees,loading}=useEmployees()

  return (
    <div className="w-full">
       
      <div className=" mx-auto w-[1180px] ">
        <div className="mt-8">
          <Title title="Controle de Funcionários"  subtitle="Empresa DoQR Tecnologia"/>
        </div>
        <div className="flex justify-between items-end">
          <Input placeholder="Buscar Funcionário..."  className="w-[383px] mt-8"/>
          <Button className="cursor-pointer">
            
                            <Image src="/mais.png"
                            width={14} height={14} alt="Deletar"  />

             Novo Funcionário</Button>
        </div>
        {loading?"Carregando...": <div className="mt-3"><TableList employees={employees} /></div>}
      
      </div>
    </div>
  );
}
