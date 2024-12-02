export type ListElement = {
  name: string;
  id: string;
  active: boolean;
};

export interface ListItemProps {
  teacherList?: boolean;
  list: ListElement[];
  handleEdit: (id: string, name: string, active: boolean) => void;
  handleDelete: (id: string) => void;
}