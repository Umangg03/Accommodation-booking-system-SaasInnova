import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, type Relation } from "typeorm";
import { Role } from "./role.entity.js";

@Entity()
export class Users {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column({ type: "varchar" })
    password: string;

    @ManyToOne(() => Role, (role) => role.users, { onDelete: "SET NULL" })
    role: Role
}
