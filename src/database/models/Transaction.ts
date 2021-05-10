import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('transactions')
export class Transaction {
  @PrimaryGeneratedColumn()
  readonly id: string

  @Column()
  title: string

  @Column()
  amount: number

  @Column()
  type: 'deposit' | 'withdraw'

  @Column()
  category: string

  @CreateDateColumn()
  created_at: Date
}