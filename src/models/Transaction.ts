import { getCustomRepository } from 'typeorm'

import { TransactionsRepository } from '../database/repositories/TransactionRepository'

type TransactionInput = {
  title: string
  amount: number
  type: 'deposit' | 'withdraw'
  category: string
}

class Transaction {
  async getAll() {
    const repository = getCustomRepository(TransactionsRepository)

    const transactions = await repository.find()

    return transactions
  }

  async create(data: TransactionInput) {
    const repository = getCustomRepository(TransactionsRepository)

    const transaction = repository.create(data)

    return await repository.save(transaction)
  }

  async update(id: string, data: TransactionInput) {
    const repository = getCustomRepository(TransactionsRepository)
    
    const transaction = await repository.findOne({ id })

    const updatedTransaction = {
      ...transaction,
      ...data
    }

    return await repository.save(updatedTransaction)
  }

  async delete(id: string) {
    const repository = getCustomRepository(TransactionsRepository)

    const isDeleted = Boolean(await repository.delete({ id }))

    return isDeleted
  }

}

export default new Transaction()
