export interface User {
  id: number;
  name: string;
  lastName: string;
  age?: number;
}

export interface TypeQuery {
  allUsers?: boolean;
  name?: string;
  lastName?: string;
  age?: number;
  max?: number;
  min?: number;
}
