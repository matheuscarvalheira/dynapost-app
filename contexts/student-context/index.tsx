import { api } from "@/api/backend";
import React, { createContext, ReactNode, useEffect, useState } from "react";
import { StudentContextProps } from "./types";

export const StudentContext = createContext({} as StudentContextProps);

export function StudentProvider({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [studentList, setStudentList] = useState([]);

  async function getAllStudents() {
    setLoading(true);
    setError("");
    try {
      const { data } = await api.get("students/");
      setStudentList(data);
    } catch (error) {
      console.error("Failed to fetch students: ", error);
      setError("Ocorreu um erro ao tentar buscar informações dos alunos");
    } finally {
      setLoading(false);
    }
  }

  async function deleteStudent({ id }: { id: string }) {
    setLoading(true);
    setError("");
    try {
      await api.delete(`students/${id}`);
      getAllStudents();
    } catch (error) {
      console.error("Failed to delete student: ", error);
      setError("Ocorreu um erro ao tentar apagar aluno");
    } finally {
      setLoading(false);
    }
  }

  async function updateStudent({
    id,
    name,
    active,
  }: {
    id: string;
    name: string;
    active: boolean;
  }) {
    setLoading(true);
    setError("");
    try {
      await api.put(`students/${id}`, { name, active });
      getAllStudents();
    } catch (error) {
      console.error("Failed to update student: ", error);
      setError("Ocorreu um erro ao tentar atualizar aluno");
    } finally {
      setLoading(false);
    }
  }

  async function createStudent({
    name,
    active,
  }: {
    name: string;
    active: boolean;
  }) {
    setLoading(true);
    setError("");
    try {
      await api.post(`students/`, { name, active });
      getAllStudents();
    } catch (error) {
      console.error("Failed to create student: ", error);
      setError("Ocorreu um erro ao tentar criar aluno");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getAllStudents();
  }, []);

  return (
    <StudentContext.Provider
      value={{
        loading,
        error,
        studentList,
        deleteStudent,
        updateStudent,
        createStudent,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
}
