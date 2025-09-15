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
import { ListEmployee } from "@/interfaces/interfaces"
import Image from "next/image";
import { useRouter } from "next/navigation";

interface TableListProps {
  employees: ListEmployee[];
  onDelete: (id: number) => void;
}


const headers = [
  { label: 'Nome', className: 'w-[200px]' },
  { label: 'Email', className: '' },
  { label: 'CPF', className: '' },
  { label: 'Celular', className: '' },
  { label: 'Data de Nascimento', className: '' },
  { label: 'Tipo de Contratação', className: '' },
  { label: 'Status', className: '' },
  { label: 'Ação', className: 'text-right' },
];

const formatCPF = (cpf: string): string => {
  if (!cpf || cpf.length !== 11) return cpf;
  return `${cpf.slice(0, 3)}.${cpf.slice(3, 6)}.${cpf.slice(6, 9)}-${cpf.slice(9)}`;
};

const formatPhone = (phone: string): string => {
  if (!phone || phone.length !== 11) return phone;
  return `(${phone.slice(0, 2)}) ${phone.slice(2, 7)}-${phone.slice(7)}`;
};

export function TableList({ employees, onDelete }: TableListProps) {
  const router = useRouter();

  return (
    <Table className="border border-[#CDCAD2]">
      
      <TableHeader className="bg-[#EFEDF2] !px-4 " >
        <TableRow>
          {headers.map(header => (
            <TableHead   style={{padding:"0px 16px"}} key={header.label} className={header.className}>
              {header.label}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody className="">
        {employees.map((item) => (
          <TableRow key={item.id} className="h-12 px-4 !px-4 ">
            <TableCell className="px-4 !px-4">{item.name}</TableCell>
            <TableCell className="px-4 !px-4">{item.email}</TableCell>
            <TableCell className="px-4 !px-4">{formatCPF(item.cpf)}</TableCell>
            <TableCell className="px-4 !px-4">{formatPhone(item.phone)}</TableCell>
            <TableCell className="px-4 !px-4">{new Date(item.dateOfBith).toLocaleDateString('pt-BR')}</TableCell>
            <TableCell className="px-4 !px-4">{item.typeOfHiring}</TableCell>
            <TableCell>
              <span className={`px-2 mx-2 py-1 rounded-full text-xs ${
                item.status ? 'text-green-800' : 'bg-red-100 text-red-800'
              }`} style={{ backgroundColor: item.status ? '#B5F8B7' : undefined }}>
                {item.status?"Ativo":"Inativo"}
              </span>
            </TableCell>
            <TableCell className="text-right flex justify-end gap-2">
              <button className="p-1 hover:bg-gray-100 rounded cursor-pointer" onClick={() => router.push(`/employee/${item.id}`)}>
                <Image src="/edit.png" alt="Editar" height={18} width={18} />
              </button>
              <button className="p-1 hover:bg-gray-100 rounded cursor-pointer" onClick={() => {
                if (window.confirm('Tem certeza que deseja excluir este funcionário?')) {
                  onDelete(item.id);
                }
              }}>
                <Image src="/delete.png" alt="Deletar" className="" height={18} width={16} />
              </button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

