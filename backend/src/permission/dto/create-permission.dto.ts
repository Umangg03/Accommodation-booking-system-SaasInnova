import { IsString, IsNotEmpty, IsNumber, IsEmail } from "class-validator";
export class CreatePermissionDto {
    
    @IsNumber()@IsNotEmpty()
    id: number;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsNumber()@IsNotEmpty()
    roleId: number;
}
    