// TODO maybe separate in different files
export interface PostResponse {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface UserResponse {
  id: number;
  name: string;
  username: string;
  email: string;
  address?: UserAddress;
  phone?: string;
  website?: string;
  company?: {
    name: string;
    catchPhrase?: string;
    bs?: string;
  };
}

interface UserAddress {
  street: string;
  suite?: string;
  city: string;
  zipcode: string;
  geo?: {
    lat: number;
    lng: number;
  };
}

export interface PostProps extends PostResponse {
  author: string;
}

export interface CommentResponse {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
