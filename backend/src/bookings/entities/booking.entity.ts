import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Customers } from "../../customers/entities/customer.entity";

@Entity()
export class Booking {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    check_in: Date;

    @Column()
    cheek_out: Date;

    @Column()
    phone: string;

    @ManyToOne(()=> Customers ,(customer)=> customer.booking)
    customer: Customers
}
