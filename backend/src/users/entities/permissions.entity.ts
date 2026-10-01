import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, type Relation, JoinColumn } from "typeorm";
import { Role } from "./role.entity.js";

@Entity()
export class Permission {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    permission_type: number;

    @ManyToOne(() => Role, (role) => role.permissions)
    role: Role;
}
