import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const THTable = [
  {
    Nome: "João Silva",
    Email: "joao.silva@doqr.com.br",
    CPF: "123.456.789-00",
    Celular: "(11) 98765-4321",
    nascimento: "15/03/1990",
    tipoContratacao: "CLT",
    status: "Ativo",
    Acao: "Editar"
  },
  {
    Nome: "Maria Santos",
    Email: "maria.santos@doqr.com.br",
    CPF: "987.654.321-00",
    Celular: "(21) 99876-5432",
    nascimento: "22/07/1985",
    tipoContratacao: "PJ",
    status: "Ativo",
    Acao: "Editar"
  },
  {
    Nome: "Pedro Oliveira",
    Email: "pedro.oliveira@doqr.com.br",
    CPF: "456.789.123-00",
    Celular: "(31) 91234-5678",
    nascimento: "08/12/1992",
    tipoContratacao: "CLT",
    status: "Inativo",
    Acao: "Editar"
  },
  {
    Nome: "Ana Costa",
    Email: "ana.costa@doqr.com.br",
    CPF: "321.654.987-00",
    Celular: "(41) 92345-6789",
    nascimento: "30/05/1988",
    tipoContratacao: "Estágio",
    status: "Ativo",
    Acao: "Editar"
  },
  {
    Nome: "Carlos Mendes",
    Email: "carlos.mendes@doqr.com.br",
    CPF: "789.123.456-00",
    Celular: "(51) 93456-7890",
    nascimento: "18/09/1983",
    tipoContratacao: "CLT",
    status: "Ativo",
    Acao: "Editar"
  },
  {
    Nome: "Julia Ferreira",
    Email: "julia.ferreira@doqr.com.br",
    CPF: "234.567.890-00",
    Celular: "(61) 94567-8901",
    nascimento: "05/01/1995",
    tipoContratacao: "PJ",
    status: "Ativo",
    Acao: "Editar"
  },
  {
    Nome: "Roberto Lima",
    Email: "roberto.lima@doqr.com.br",
    CPF: "567.890.123-00",
    Celular: "(71) 95678-9012",
    nascimento: "25/06/1991",
    tipoContratacao: "CLT",
    status: "Inativo",
    Acao: "Editar"
  },
]

export function TableList() {
  return (
    <Table className="border border-[#CDCAD2]">
      <TableCaption>Lista de Funcionários</TableCaption>
      <TableHeader className="bg-[#EFEDF2] ">
        <TableRow>
          <TableHead className="w-[200px] text-[##58575A] px-4 !px-4">Nome</TableHead>
          <TableHead className="px-4 !px-4">Email</TableHead>
          <TableHead className="px-4 !px-4">CPF</TableHead>
          <TableHead className="px-4 !px-4">Celular</TableHead>
          <TableHead className="px-4 !px-4">Data de Nascimento</TableHead>
          <TableHead className="px-4 !px-4">Tipo de Contratação</TableHead>
          <TableHead className="px-4 !px-4">Status</TableHead>
          <TableHead className="text-right px-4 !px-4">Ação</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="">
        {THTable.map((item) => (
          <TableRow key={item.Nome} className="h-12 ">
            <TableCell className="font-medium px-4 !px-4">{item.Nome}</TableCell>
            <TableCell className="px-4 !px-4">{item.Email}</TableCell>
            <TableCell className="px-4 !px-4">{item.CPF}</TableCell>
            <TableCell className="px-4 !px-4">{item.Celular}</TableCell>
            <TableCell className="px-4 !px-4">{item.nascimento}</TableCell>
            <TableCell className="px-4 !px-4">{item.tipoContratacao}</TableCell>
            <TableCell>
              <span className={`px-2 py-1 rounded-full text-xs ${
                item.status === 'Ativo' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}>
                {item.status}
              </span>
            </TableCell>
            <TableCell className="text-right">
              <button className="text-blue-600 hover:text-blue-800 font-medium">
                {item.Acao}
              </button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
