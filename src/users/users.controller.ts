import { Body, Controller, Get, Param, Patch, Post, UseGuards } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dtos/create-user.dto";
import { UpdateUserStatus } from "./dtos/update-user-status.dto";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guard";

@UseGuards(JwtAuthGuard)
@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) {}

    @Get()
    async findAll() {
        return this.userService.getAllUsers();
    }

    @Get(':id')
    async findByIf(@Param('id') id: number) {
        return this.userService.getById(id);
    }

    @Post()
    async createUser(@Body() createUserDto: CreateUserDto) {
        return this.userService.createUser(createUserDto);
    }

    @Patch(':id/status')
    async changeUserStatus(@Param('id') userId: number, @Body() updateUserStatus: UpdateUserStatus) {
        console.log("status",  updateUserStatus);
        return this.userService.updateUserStatus(userId, updateUserStatus.status);
    }
}
