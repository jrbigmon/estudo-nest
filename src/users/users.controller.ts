import { Controller, Get, Param, Query } from "@nestjs/common";
import { UsersService } from "./users.service";
import { User, TypeQuery } from "../utils/types";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUsers(): User[] {
    return this.usersService.getUsers();
  }

  @Get("searchByName")
  getUserByName(@Query() query: TypeQuery): User | User[] | string {
    return this.usersService.getUserByName(
      query.name,
      query.lastName,
      query.allUsers
    );
  }

  @Get("age")
  getUserByAge(@Query() query: TypeQuery): User[] | string {
    return this.usersService.getUserByAge(query.max, query.min);
  }

  @Get(":id")
  getUserById(@Param("id") id: number): User | string {
    return this.usersService.getUserById(id);
  }
}
