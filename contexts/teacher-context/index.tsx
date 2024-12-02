import { api } from "@/api/backend";
import React, { createContext, ReactNode, useEffect, useState } from "react";
import { TeacherContextProps } from "./types";

export const TeacherContext = createContext({} as TeacherContextProps);

export function TeacherProvider({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [teacherList, setTeacherList] = useState([]);

  async function getAllTeachers() {
    setLoading(true);
    setError("");
    try {
      const { data } = await api.get("teachers/");
      setTeacherList(data);
    } catch (error) {
      console.error("Failed to fetch teachers: ", error);
      setError("Ocorreu um erro ao tentar buscar informações dos professores");
    } finally {
      setLoading(false);
    }
  }

  async function deleteTeacher({ id }: { id: string }) {
    setLoading(true);
    setError("");
    try {
      await api.delete(`teachers/${id}`);
      getAllTeachers();
    } catch (error) {
      console.error("Failed to delete teacher: ", error);
      setError("Ocorreu um erro ao tentar apagar professor");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getAllTeachers();
  }, []);

  async function updateTeacher({
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
      await api.put(`teachers/${id}`, { name, active });
      getAllTeachers();
    } catch (error) {
      console.error("Failed to update teacher: ", error);
      setError("Ocorreu um erro ao tentar atualizar professor");
    } finally {
      setLoading(false);
    }
  }

  async function createTeacher({
    name,
    active,
  }: {
    name: string;
    active: boolean;
  }) {
    setLoading(true);
    setError("");
    try {
      await api.post(`teachers/`, { name, active });
      getAllTeachers();
    } catch (error) {
      console.error("Failed to update teacher: ", error);
      setError("Ocorreu um erro ao tentar atualizar professor");
    } finally {
      setLoading(false);
    }
  }

  return (
    <TeacherContext.Provider
      value={{ loading, error, teacherList, deleteTeacher, updateTeacher, createTeacher }}
    >
      {children}
    </TeacherContext.Provider>
  );
}
