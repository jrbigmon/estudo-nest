import { User } from "./User";

function createNewUser(
  id: number,
  name: string,
  lastName: string,
  age?: number
): User {
  return {
    id: id,
    name: name,
    lastName: lastName,
    age: age,
  };
}

const user1 = createNewUser(1, "vagner", "siqueira", 25);
const user2 = createNewUser(2, "eunice", "siqueira", 55);
const user3 = createNewUser(3, "aretha", "siqueira", 25);
const user4 = createNewUser(4, "julliane", "siqueira", 32);
const user5 = createNewUser(5, "cesar", "augusto", 34);

const users: User[] = [user1, user2, user3, user4, user5];

export default users;
