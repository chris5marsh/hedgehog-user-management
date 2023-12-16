export type RegisterRequest = {
  email: string;
  first_name: string;
  last_name: string;
  password: string;
  password_confirmation: string;
};

export type AddUserRequest = {
  email: string;
  first_name: string;
  last_name: string;
};

export type LoginRequest = {
  email: string;
  password: string;
};
