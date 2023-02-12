
import {IsNotEmpty, IsString} from 'class-validator'
import { UserType } from './users.entity';
export class UserCreateDto {
    @IsNotEmpty()
    @IsString()
    user_name: string;

    @IsNotEmpty()
    @IsString()
    user_email: string;

    @IsNotEmpty()
    @IsString()
    user_account: string;

    @IsNotEmpty()
    @IsString()
    user_password: string;

    @IsNotEmpty()
    @IsString()
    user_type: UserType;
}