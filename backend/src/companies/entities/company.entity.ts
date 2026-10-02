import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Customers } from "../../customers/entities/customer.entity"

@Entity()
export class Company {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    address: string

    @Column()
    industry: string

    @OneToMany(()=> Customers, (customer)=> customer.company)
    customer: Customers[]
}