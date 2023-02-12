import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserCreateDto } from './user.dto';
import { User } from './users.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) { }

    async createUser(userCreateDto: UserCreateDto): Promise<User>{
        const user = this.usersRepository.create(userCreateDto);
        return await this.usersRepository.save(user); 
    }

    getUsers(): Promise<User[]>{
        return this.usersRepository.find();
    }

    async getUser(id: number): Promise<User>{
        const user = await this.usersRepository.findOneBy({user_id:id});

        if (user === undefined) {
            throw new NotFoundException('User Not Found')
        }
        return user;
    }

    async updateUser(id: number, userCreateDto: UserCreateDto): Promise<User>{
        const user = await this.usersRepository.findOneBy({user_id:id});

        if (!user) {
            throw new NotFoundException('User Not Found')
        }

        user.user_account = userCreateDto.user_account;
        user.user_email = userCreateDto.user_email;
        user.user_name = userCreateDto.user_name;
        user.user_password = userCreateDto.user_password;
        user.user_type = userCreateDto.user_type;

        return await this.usersRepository.save(user);
    }

    async deleteUser(user_id:number){
        await this.usersRepository.delete(user_id)
    }
}
