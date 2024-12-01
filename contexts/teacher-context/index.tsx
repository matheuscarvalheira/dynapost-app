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

  useEffect((() => {
    getAllTeachers();
  }), [])

  return (
    <TeacherContext.Provider value={{ loading, error, teacherList }}>
      {children}
    </TeacherContext.Provider>
  );
}
