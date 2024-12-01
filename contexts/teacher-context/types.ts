export interface TeacherContextProps {
  loading: boolean;
  error: string;
  teacherList: Teacher[]
}

export interface Teacher {
    id: string;
    name: string;
    active: boolean;
}
