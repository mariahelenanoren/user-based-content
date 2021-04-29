export interface User {
  user: {
    userName: string;
    password: string;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
    _id: string;
  };
}
export interface Post {
  text: string;
  _id: string;
  _user: string;
  userName: string;
}
