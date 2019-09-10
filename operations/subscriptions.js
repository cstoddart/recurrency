import { format } from 'date-fns';

function filterTransactions(transactions) {
  return transactions.filter((transaction) => transaction.amount > 0);
}

function splitTransactionsByMonth(transactions) {
  const transactionsByMonth = {};
  transactions.forEach((transaction) => {
    const month = format(transaction.date, 'M');
    transactionsByMonth[month]
      ? transactionsByMonth[month].push(transaction)
      : transactionsByMonth[month] = [transaction];
  });
  return transactionsByMonth;
}

function findUniqueTransactions(transactionsByMonth) {
  const uniqueTransactionsByMonth = {};
  Object.keys(transactionsByMonth).forEach((month) => {
    const currentTransactions = transactionsByMonth[month];
    currentTransactions.filter((currentTransaction) => {
      const firstIndex = currentTransactions.findIndex((transaction) => transaction.name === currentTransaction.name);
      const lastIndex = currentTransactions.length - 1 - [...currentTransactions].reverse().findIndex((transaction) => transaction.name === currentTransaction.name);
      if (firstIndex && lastIndex && firstIndex === lastIndex) {
        const month = format(currentTransaction.date, 'M');
        uniqueTransactionsByMonth[month]
          ? uniqueTransactionsByMonth[month].push(currentTransaction)
          : uniqueTransactionsByMonth[month] = [currentTransaction];
      }
    })
  });
  return uniqueTransactionsByMonth;
}

function findRecurringUniqueTransactions(uniqueTransactionsByMonth) {
  const recurringUniqueTransactions = [];
  const months = Object.keys(uniqueTransactionsByMonth);
  uniqueTransactionsByMonth[months[0]].forEach((currentTransaction) => {
    const transactionExistsInNextMonth = uniqueTransactionsByMonth[months[1]].find((transaction) => (
      transaction.name === currentTransaction.name
      && transaction.amount === currentTransaction.amount // TODO: move this to function above
    ));
    const transactionExistsInThirdMonth = months[2] && uniqueTransactionsByMonth[months[2]].find((transaction) => (
      transaction.name === currentTransaction.name
      && transaction.amount === currentTransaction.amount
    ));
    if (transactionExistsInNextMonth || transactionExistsInThirdMonth) recurringUniqueTransactions.push(currentTransaction);
  });
  return recurringUniqueTransactions;
}

export function identifySubscriptions(transactions) {
  const filteredTransactions = filterTransactions(transactions)
  const transactionsByMonth = splitTransactionsByMonth(filteredTransactions);
  const uniqueTransactionsByMonth = findUniqueTransactions(transactionsByMonth);
  const subscriptions = findRecurringUniqueTransactions(uniqueTransactionsByMonth);
  return subscriptions;
}
