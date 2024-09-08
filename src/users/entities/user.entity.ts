import { Entity, Column, PrimaryGeneratedColumn, EntityRepository } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn({ name: 'id' })
    id: number;

    @Column({ name: 'name' })
    name: string;

    @Column({ name: 'last_name'})
    lastName: string;

    @Column({ name: 'email' })
    email: string;

    @Column({ name: 'password' })
    password: string;

    @Column({ name: 'cellphone' })
    cellphone: string;

    @Column({ name: 'status' })
    status: boolean;
}