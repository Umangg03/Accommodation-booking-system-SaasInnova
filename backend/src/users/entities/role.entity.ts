import { Entity, PrimaryGeneratedColumn, Column, OneToMany, type Relation } from "typeorm";
import { Users } from "./user.entity.js";
import { Permission } from "./permissions.entity.js";

@Entity()
export class Role {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;
    
    @OneToMany(() => Permission, (permission) => permission.role)
    permissions: Permission[];
    
    @OneToMany(() => Users, (user) => user.role)
    users: Users[];

}
