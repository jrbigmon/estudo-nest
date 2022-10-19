import { Injectable } from "@nestjs/common";
import { User } from "../utils/types";
import users from "./users";

@Injectable()
export class UsersService {
  getUsers(): User[] {
    return users;
  }

  getUserById(id: number): User | string {
    const user = users.find((user) => user.id == id);
    if (user) return user;
    return "User not found";
  }

  getUserByName(
    name?: string,
    lastName?: string,
    allUsers?: boolean
  ): User | User[] | string {
    if (!allUsers) {
      const user = users.find((user) => {
        if (lastName && name) {
          if (
            user.name.toLowerCase() == name.toLowerCase() &&
            user.lastName.toLowerCase() == lastName.toLowerCase()
          ) {
            return user;
          } else {
            return undefined;
          }
        }
        if (name && user.name.toLowerCase() == name.toLowerCase()) {
          return user;
        }
        if (lastName && user.lastName.toLowerCase() == lastName.toLowerCase()) {
          return user;
        }
      });

      if (user) return user;

      return "User not found";
    }
    const usersEquals = users.filter((user) => {
      if (
        name &&
        lastName &&
        name.toLowerCase() == user.name.toLowerCase() &&
        lastName.toLowerCase() == user.lastName.toLocaleLowerCase()
      ) {
        return user;
      }
      if (name && name.toLowerCase() == user.name.toLowerCase()) {
        return user;
      }
      if (lastName && lastName.toLowerCase() == user.lastName.toLowerCase()) {
        return user;
      }
    });
    return usersEquals;
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
