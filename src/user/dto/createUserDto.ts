import { IsEmail, IsNumberString, IsString, isNumber } from "class-validator";

export class CreateUserDto {
    @IsString()
    name: string;

    @IsNumberString()
    age: number;

    @IsEmail()
    email: string;
}