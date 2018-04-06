export interface Login {
  email: string;
  password: string;
}

export interface Register extends Login {
  first_name: string;
  last_name: string;
  location: string;
}
