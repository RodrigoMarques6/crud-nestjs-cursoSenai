import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity() // Estou dizendo que este user passa a ser uma entidade
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    password: string
}