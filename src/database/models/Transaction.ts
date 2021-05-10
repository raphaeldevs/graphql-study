import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity('transactions')
export class Transaction {
  @PrimaryColumn()
  readonly id: string

  @Column()
  title: string

  @Column()
  amount: number

  @Column()
  type: 'deposit' | 'withdraw'

  @Column()
  category: string

  @Column()
  created_at: Date
}