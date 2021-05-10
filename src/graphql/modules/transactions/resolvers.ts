import Transaction from '../../../models/Transaction'

export default {
  Query: {
    transactions: () => Transaction.getAll()
  },
  Mutation: {
    createTransaction: (_, { data }) => Transaction.create(data),
    updateTransaction: (_, { id, data }) => Transaction.update(id, data),
    deleteTransaction: (_, { id }) => Transaction.delete(id)
  }
}