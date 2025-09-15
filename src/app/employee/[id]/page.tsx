"use client"

import FormUser from "@/components/form/form"
import Title from "@/components/title/title";
import { useEmployees } from "@/hooks/useEmployee";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

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
        <div className="mt-8">
          <Title title="Editar Funcionário" subtitle="Edição de Funcionário"/>
        </div>
        <FormUser buttonText="Salvar" isEdit={true} initialData={employee} employeeId={id} />
      </div>
    </section>
  );
};

export default editarUsuario;