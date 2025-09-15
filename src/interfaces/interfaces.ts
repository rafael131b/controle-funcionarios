export interface Employee {
  id: number;
  name: string;
  email: string;
  cpf: string;
  phone: string;
  dateOfBith: string;
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