export interface TeacherContextProps {
  loading: boolean;
  error: string;
  teacherList: Teacher[];
  deleteTeacher: ({ id }: { id: string }) => void;
  createTeacher: ({name, active}: {name: string, active: boolean}) => void
  updateTeacher: ({id, name, active}: {id: string, name: string, active: boolean}) => void
}

export interface Teacher {
  id: string;
  name: string;
  active: boolean;
}
