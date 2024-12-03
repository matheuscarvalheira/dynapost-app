export interface StudentContextProps {
  loading: boolean;
  error: string;
  studentList: Student[];
  deleteStudent: ({ id }: { id: string }) => void;
  createStudent: ({ name, active }: { name: string; active: boolean }) => void;
  updateStudent: ({
    id,
    name,
    active,
  }: {
    id: string;
    name: string;
    active: boolean;
  }) => void;
}

export interface Student {
  id: string;
  name: string;
  active: boolean;
}
