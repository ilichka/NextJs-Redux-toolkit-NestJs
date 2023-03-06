import {Inject, Injectable, Param} from '@nestjs/common';
import {User} from "./users.model";
import {InjectModel} from "@nestjs/sequelize";
import {CreateUserDto} from "./dto/create-user.dto";

@Injectable()
export class UsersService {

    constructor(@InjectModel(User) private userRepository: typeof User) {}


    async createUser(dto: CreateUserDto) {
        const user = await this.userRepository.create(dto)
        return user
    }

    async getAllUsers() {
        const users = await this.userRepository.findAll()
        return users
    }

    async updateUser(id: number, dto: CreateUserDto) {
        const user = await this.userRepository.update(dto,{where: {id}})
        return user
    }

    async getUser(id: number) {
        const user = await this.userRepository.findOne({where: {id}})
        return user
    }

    async deleteUser(id: number) {
        const user = await this.userRepository.destroy({where: {id}})
        return await this.getAllUsers()
    }
}
