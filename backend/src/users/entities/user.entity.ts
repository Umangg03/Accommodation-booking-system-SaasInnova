import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Role } from "../../role/entities/role.entity";

@Entity()
export class Users {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @ManyToOne(()=> Role,(role)=>role.user)
    role: Role;
}
