"use client"

import FormUser from "@/components/form/form"
import Title from "@/components/title/title";
import { useEmployees } from "@/hooks/useEmployee";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const editarUsuario = () => {
  const params = useParams();
  const id = params.id as string;
  const { getEmployeeById } = useEmployees();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    const fetchEmployee = async () => {
      const data = await getEmployeeById(id);
      setEmployee(data);
    };
    if (id) {
      fetchEmployee();
    }
  }, [id, getEmployeeById]);

  return (
    <section>
      <div className="w-[1180px] mx-auto">
        <div className="mb-4">
          <Link href="/" className="flex items-center text-[#0B0B0C] font-sans font-bold text-base leading-none tracking-normal hover:text-gray-700 cursor-pointer mt-8">
            <ArrowLeft className="mr-2 h-4 w-4 text-[#0B0B0C]" />
            Voltar
          </Link>
        </div>
        <div className="mt-4">
          <Title title="Editar Funcionário" subtitle="Empresa DoQR Tecnologia"/>
        </div>
       <div className="mt-8">
         <FormUser buttonText="Salvar" isEdit={true} initialData={employee} employeeId={id} />
       </div>
      </div>
    </section>
  );
};

export default editarUsuario;