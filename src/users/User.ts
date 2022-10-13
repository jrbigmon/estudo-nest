export interface User {
  id: number;
  name: string;
  lastName: string;
  age?: number;
}

export interface MaxAndMinAge {
  max?: number;
  min?: number;
}
