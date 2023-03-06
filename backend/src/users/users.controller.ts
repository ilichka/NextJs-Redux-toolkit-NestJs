import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {CreateUserDto} from "./dto/create-user.dto";
import {UsersService} from "./users.service";

@Controller('users')
export class UsersController {

    constructor(private userService: UsersService) {}

    @Post()
    create(@Body() userDto: CreateUserDto) {
        return this.userService.createUser(userDto)
    }

    @Get()
    getAll() {
        return this.userService.getAllUsers()
    }

    @Get(':id')
    getUser(@Param('id') id: string) {
        return this.userService.getUser(+id)
    }

    @Put(':id')
    updateUser(@Param('id') id: string, @Body() updateCatDto: CreateUserDto) {
        return this.userService.updateUser(+id,updateCatDto)
    }

    @Delete(':id')
    deleteUser(@Param('id') id: string) {
        return this.userService.deleteUser(+id)
    }
}
