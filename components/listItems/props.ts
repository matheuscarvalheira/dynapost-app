import { User } from './index';

export interface ListItemProps {
  list: User[];
  teacherList?: boolean;
  handleDelete: (id: string) => void;
  handleEdit: (id: string) => void;
}