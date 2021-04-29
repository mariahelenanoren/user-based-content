export interface User {
  userName: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  _id: string;
}
export interface Post {
  text: string;
  _id: string;
  _user: string;
  userName: string;
}

export interface EditModal {
  isVisible: boolean;
  post: Post;
  postUpdated: boolean;
}

export interface CreateModal {
  isVisible: boolean;
  text: string;
  postCreated: boolean;
}
