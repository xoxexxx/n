import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "DATA"})
export class Date {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: false })
    card_number: string

    @Column({ unique: false })
    card_exp: string;

    @Column({ unique: false })
    card_cvc: string;
}

