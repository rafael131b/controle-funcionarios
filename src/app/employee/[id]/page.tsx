import FormUser from "@/components/form/form"
import Title from "@/components/title/title";
import { getEmployee } from "@/api/api";

interface PageProps {
  params: Promise<{ id: string }>;
}

const editarUsuario = async ({ params }: PageProps) => {
  const { id } = await params;
  const res = await getEmployee(id);
  const employee = await res.json();

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