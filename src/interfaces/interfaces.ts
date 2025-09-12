export interface Employee {
  id: number;
  name: string;
  email: string;
  cpf: string;
  phone: string;
  dateOfBith: string; // Note: API has "dateOfBith" - might be a typo
  typeOfHiring: string;
  status: boolean;
}

export interface ListEmployee {
  id: number;
  name: string;
  email: string;
  cpf: string;
  phone: string;
  dateOfBith: string;
  typeOfHiring: string;
  status: string;
  acao: string;
}


// m.name}</TableCell>
//             <TableCell className="px-4 !px-4">{item.email}</TableCell>
//             <TableCell className="px-4 !px-4">{item.cpf}</TableCell>
//             <TableCell className="px-4 !px-4">{item.phone}</TableCell>
//             <TableCell className="px-4 !px-4">{item.dateOfBith}</TableCell>
//               <TableCell className="px-4 !px-4">{item.typeOfHiring