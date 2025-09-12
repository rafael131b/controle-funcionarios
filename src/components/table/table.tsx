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

interface TableListProps {
  employees: ListEmployee[];
}


const baseHeaderClass = 'px-4 !px-4 text-[#58575A]';

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

export function TableList({ employees }: TableListProps) {

  console.log("employees table ",employees)
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
            <TableCell className="px-4 !px-4">{item.cpf}</TableCell>
            <TableCell className="px-4 !px-4">{item.phone}</TableCell>
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
              <button className="p-1 hover:bg-gray-100 rounded cursor-pointer">
                <Image src="/edit.png" alt="Editar" height={18} width={18} />
              </button>
              <button className="p-1 hover:bg-gray-100 rounded cursor-pointer">
                <Image src="/delete.png" alt="Deletar" className="" height={18} width={16} />
              </button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

