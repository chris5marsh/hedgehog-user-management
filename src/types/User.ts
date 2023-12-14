export interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  display_picture: string;
}

export interface UsersResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: User[];
}
