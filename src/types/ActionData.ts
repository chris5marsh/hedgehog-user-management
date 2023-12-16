export type ActionData = {
  data: {
    message?: string;
    errors?: {
      first_name: string[];
      last_name: string[];
      email: string[];
      password: string[];
      password_confirmation: string[];
    };
  };
};
