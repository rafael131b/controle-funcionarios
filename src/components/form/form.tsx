"use client"

import React from "react"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "../ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";

const formSchema = z.object({
    nome: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
    email: z.string().email("Email inválido"),
    cpf: z.string().regex(/^\d{11}$/, "CPF deve ter 11 dígitos"),
    celular: z.string().regex(/^\d{10,11}$/, "Celular deve ter 10 ou 11 dígitos"),
    dataNascimento: z.string().refine((val) => !isNaN(Date.parse(val)), "Data inválida"),
    tipoContratacao: z.string().min(1, "Tipo de contratação é obrigatório"),
    status: z.string().min(1, "Status é obrigatório"),
});

const FormUser = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            nome: "",
            email: "",
            cpf: "",
            celular: "",
            dataNascimento: "",
            tipoContratacao: "",
            status: "",
        },
    });

    return (
        <Form {...form}>
            <div className="w-[1180px] min-h-[333px] rotate-0 opacity-100 absolute top-[240px] left-[130px] rounded-xl shadow-[1px_1px_16px_0px_#00000026] p-6 bg-white">
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
                                <FormControl>
                                    <Input placeholder="Digite o tipo de contratação" {...field} />
                                </FormControl>
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
                                <FormControl>
                                    <Input placeholder="Digite o status" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
            </div>
        </Form>
    )
}

export default FormUser;