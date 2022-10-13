import { Injectable } from "@nestjs/common";
import { User } from "./User";
import users from "./users";

@Injectable()
export class UsersService {
  getUsers(): User[] {
    console.log(users);
    return users;
  }

  getUserById(id: number): User | string {
    const user = users.find((user) => user.id == id);
    if (user) return user;
    return "User not found";
  }

  getUserByName(firstName?: string, lastName?: string): User | string {
    const user = users.find((user) => {
      if (lastName && firstName) {
        if (
          user.name.toLowerCase() == firstName.toLowerCase() &&
          user.lastName.toLowerCase() == lastName.toLowerCase()
        ) {
          return user;
        } else {
          console.log(firstName, lastName);
          return undefined;
        }
      }
      if (firstName && user.name.toLowerCase() == firstName.toLowerCase()) {
        return user;
      }
      if (lastName && user.lastName.toLowerCase() == lastName.toLowerCase()) {
        return user;
      }
    });

    if (user) return user;

    return "User not found";
  }

  getUserByAge(max?: number, min?: number): User[] {
    const usersWithFilter = users.filter((user) => {
      if (!max && min) return user.age >= min;
      if (max && !min) return user.age <= max;
      return user.age <= max && user.age >= min;
    });
    return usersWithFilter;
  }
}
