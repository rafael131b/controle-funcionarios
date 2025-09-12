
"use client"
import { fetchEmployee } from "@/api/api";
import { ListEmployee } from "@/interfaces/interfaces";
import { useEffect, useState } from "react";




export const useEmployees = () => {
  const [employees, setEmployees] = useState<ListEmployee[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadEmployees = async () => {
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
    };

    loadEmployees();
  }, []);

  return { employees, loading, error };
};