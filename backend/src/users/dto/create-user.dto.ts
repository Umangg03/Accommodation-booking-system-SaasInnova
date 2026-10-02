import { IsString, IsNotEmpty, IsNumber, IsEmail } from "class-validator";
export class CreateUserDto {
    @IsNumber()@IsNotEmpty()
    id: number;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsNumber()@IsNotEmpty()
    roleId: number;
}
    