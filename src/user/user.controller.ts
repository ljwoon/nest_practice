import { Body, Controller, Delete, Get, HttpCode, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { UserCreateDto } from './user.dto';
import { UserService } from './user.service';
import { User } from './users.entity';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService){}
    // private readonly user: User;

    @Get()
    async getUsers(){
        return this.userService.getUsers();
    }

    @Get(':id')
    async getUser(@Param('id', new ParseIntPipe()) id : number){
        return await this.userService.getUser(id);
    }

    @Post()
    async createUser(@Body() userCreateDto:UserCreateDto){
        return await this.userService.createUser(userCreateDto);
    }


    /***
     * Pipe는 입력된 Data를 원하는 방식으로 변환하거나 데이터를 평가하고 
     * 유효성 검사를 통해 확인 후 전달하기 위해 사용되는 Class
     */
    @Put(':id')
    async updateUser(
        @Param('id', new ParseIntPipe()) id: number,
        @Body() userCreateDto:UserCreateDto,
    ) {
        return await this.userService.updateUser(id, userCreateDto);
    }

    /**
     * andler에 @HttpCode() 
     * 데코레이터를 추가하여 Status를 변경할 수 있습니다.
     * @param id 
     * @returns 
     */
    @Delete(':id')
    @HttpCode(204)
    async deleteUser(@Param('id', new ParseIntPipe()) id: number){
        return this.userService.deleteUser(id);
    }
}
