
export interface NewPostScreenProps {
    post?: IPost,
}

export interface IPost {
    id?: string
    title?: string
    body?: string
    published?: boolean
    createdAt?: Date
    modifiedAt?: Date
}
