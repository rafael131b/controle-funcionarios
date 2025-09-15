
"use client"
import { fetchEmployee, getEmployee, createEmployee, updateEmployee, deleteEmployee as apiDeleteEmployee } from "@/api/api";
import { ListEmployee } from "@/interfaces/interfaces";
import { useEffect, useState, useCallback } from "react";
import { toast } from "sonner";




export const useEmployees = () => {
  const [employees, setEmployees] = useState<ListEmployee[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadEmployees = useCallback(async () => {
    try {
      const response = await fetchEmployee();
      if (!response.ok) {
        throw new Error('Failed to fetch employees');
      }
      const data = await response.json();
      setEmployees(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadEmployees();
  }, []);

  const getEmployeeById = useCallback(async (id: string) => {
    try {
      const response = await getEmployee(id);
      if (!response.ok) {
        throw new Error('Failed to fetch employee');
      }
      return await response.json();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      return null;
    }
  }, []);

  const createNewEmployee = useCallback(async (data: any) => {
    try {
      const response = await createEmployee(data);
      if (!response.ok) {
        throw new Error('Failed to create employee');
      }
      toast.success('Funcionário criado com sucesso!');
      await loadEmployees();
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      return false;
    }
  }, [loadEmployees]);

  const updateExistingEmployee = useCallback(async (id: string, data: any) => {
    try {
      const response = await updateEmployee(id, data);
      if (!response.ok) {
        throw new Error('Failed to update employee');
      }
      toast.success('Funcionário atualizado com sucesso!');
      await loadEmployees();
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      return false;
    }
  }, [loadEmployees]);

  const deleteEmployee = useCallback(async (id: number) => {
    try {
      const response = await apiDeleteEmployee(id.toString());
      if (!response.ok) {
        throw new Error('Failed to delete employee');
      }
      toast.success('Funcionário excluído com sucesso!');
      // After delete, reload the list
      await loadEmployees();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    }
  }, [loadEmployees]);

  const [searchQuery, setSearchQuery] = useState('');

  const filteredEmployees = employees.filter(employee =>
    employee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    employee.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    employee.cpf.includes(searchQuery)
  );

  return {
    employees,
    filteredEmployees,
    loading,
    error,
    searchQuery,
    setSearchQuery,
    getEmployeeById,
    createNewEmployee,
    updateExistingEmployee,
    deleteEmployee
  };
};