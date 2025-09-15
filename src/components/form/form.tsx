"use client"

import React from "react"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Button } from "../ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useEmployees } from "../../hooks/useEmployee";

const formSchema = z.object({
    nome: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
    email: z.string().email("Email inválido"),
    cpf: z.string().regex(/^\d{11}$/, "CPF deve ter 11 dígitos"),
    celular: z.string().regex(/^\d{10,11}$/, "Celular deve ter 10 ou 11 dígitos"),
    dataNascimento: z.string().refine((val) => !isNaN(Date.parse(val)), "Data inválida"),
    tipoContratacao: z.string().min(1, "Tipo de contratação é obrigatório"),
    status: z.enum(["Ativo", "Inativo"], "Selecione o status"),
});

type FormData = z.infer<typeof formSchema>;

const FormUser = ({ buttonText = "Cadastrar", isEdit = false, initialData, employeeId }: { buttonText?: string; isEdit?: boolean; initialData?: any; employeeId?: string }) => {
    const router = useRouter();
    const { createNewEmployee, updateExistingEmployee, deleteEmployee } = useEmployees();

    const handleDelete = async () => {
        if (!employeeId) return;
        if (!window.confirm('Tem certeza que deseja excluir este funcionário?')) return;
        await deleteEmployee(parseInt(employeeId));
        router.push('/');
    };

    const form = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            nome: initialData?.name || "",
            email: initialData?.email || "",
            cpf: initialData?.cpf || "",
            celular: initialData?.phone || "",
            dataNascimento: initialData?.dateOfBith ? new Date(initialData.dateOfBith).toISOString().split('T')[0] : "",
            tipoContratacao: initialData?.typeOfHiring || "",
            status: initialData?.status ? "Ativo" : "Inativo",
        },
    });

    const onSubmit = async (data: FormData) => {
        // Map form data to API format
        const apiData = {
            name: data.nome,
            email: data.email,
            cpf: data.cpf,
            phone: data.celular,
            dateOfBith: data.dataNascimento,
            typeOfHiring: data.tipoContratacao,
            status: data.status === "Ativo", // Convert back to boolean
        };

        let success = false;
        if (isEdit && employeeId) {
            success = await updateExistingEmployee(employeeId, apiData);
        } else {
            success = await createNewEmployee(apiData);
        }

        if (success) {
            router.push('/');
        }
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="w-full min-h-[333px] rotate-0 opacity-100 rounded-xl shadow-[1px_1px_16px_0px_#00000026] p-6 bg-white">
                <div className="grid grid-cols-3 gap-6">
                    <FormField
                        control={form.control}
                        name="nome"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Nome</FormLabel>
                                <FormControl>
                                    <Input placeholder="Digite o nome" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input type="email" placeholder="Digite o email" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="cpf"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>CPF</FormLabel>
                                <FormControl>
                                    <Input placeholder="Digite o CPF (11 dígitos)" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="celular"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Celular</FormLabel>
                                <FormControl>
                                    <Input placeholder="Digite o celular" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="dataNascimento"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Data de Nascimento</FormLabel>
                                <FormControl>
                                    <Input type="date" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="tipoContratacao"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Tipo de Contratação</FormLabel>
                                <Select onValueChange={field.onChange} value={field.value}>
                                    <FormControl>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Selecione o tipo de contratação" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="CLT">CLT</SelectItem>
                                        <SelectItem value="PJ">PJ</SelectItem>
                                        <SelectItem value="Temporário">Temporário</SelectItem>
                                        <SelectItem value="Estágio">Estágio</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="status"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Status</FormLabel>
                                <Select onValueChange={field.onChange} value={field.value}>
                                    <FormControl>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Selecione o status" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="Ativo">Ativo</SelectItem>
                                        <SelectItem value="Inativo">Inativo</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="mt-6 flex justify-start gap-4">
                    {isEdit && <Button variant="destructive" onClick={handleDelete}>Excluir Funcionário</Button>}
                    <Button type="submit" variant="default">{buttonText}</Button>
                </div>
            </div>
            </form>
        </Form>
    )
}

export default FormUser;