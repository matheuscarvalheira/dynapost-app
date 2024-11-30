export interface BackendContextProps {
  classrooms: Classroom[] | []
  postList: Post[] | []
  loading: boolean
  error: string
  getSearchedPosts: ({ queryString }: GetSearchedPostsProps) => void
  cleanPostSearch: () => void
  searchedPosts: Post[] | []
  createPost: ({ title, body, published, classroom_id }: Post) => Promise<CreatePostResult>
  updatePost: ({ id, title, body, published }: Post) => Promise<UpdatePostResult>
  deletePost: ({ id }: Post) => void
  handleChooseClassroom: (id: string) => void
}

export interface BackendProviderProps {
  children: React.ReactNode
}

export interface GetClassroomsResult {
  getClassroomsOk: boolean,
  message?: string | undefined | unknown,
  classrooms: Classroom[]
}

export interface GetSearchedPostsProps {
  queryString?: string | undefined | unknown
}

export interface GetAllPostsResult {
  getAllPostsOk: boolean,
  message?: string | undefined | unknown,
  posts: Post[]
}

export interface GetPostProps {
  postId: string
}

export interface GetPostResult {
  getPostOk: boolean,
  message?: string | undefined | unknown,
  post: Post | null,
}

export interface CreatePostResult {
  createPostOk: boolean,
  message?: string | undefined | unknown,
  post: Post | null,
}

export interface UpdatePostResult {
  updatePostOk: boolean,
  message?: string | undefined | unknown,
  post: Post | null,
}

export interface DeletePostResult {
  deletePostOk: boolean,
  message?: string | undefined | unknown,
}

export interface Classroom {
  id: string,
  name: string,
  createdAt: string;
  modifiedAt: string;
}

export interface Post {
  id: string,
  title?: string,
  body?: string,
  published?: boolean,
  createdAt?: string,
  modifiedAt?: string,
  teacher_id?: string,
  teacher_name?: string;
  classroom_id?: string,
}