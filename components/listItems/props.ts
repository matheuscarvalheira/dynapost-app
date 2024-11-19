type ListElement = {
    name: string,
    id: string;
}

export interface ListItemProps {
    teacherList?: boolean
    list: ListElement[]
    handleEdit: (id: string) => void
    handleDelete: (id: string) => void
} 