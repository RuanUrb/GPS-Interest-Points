import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export class InterestPoint{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    x: number

    @Column()
    y: number
}