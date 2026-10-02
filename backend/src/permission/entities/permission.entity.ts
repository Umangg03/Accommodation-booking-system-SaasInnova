import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Role } from "../../role/entities/role.entity";

@Entity()
export class Permission {

    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(()=> Role,(role) => role.Permission)
    role: Role;
    
    @Column()
    permission_type: string;
}
