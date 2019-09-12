import { format, differenceInDays } from 'date-fns';

function filterTransactions(transactions) {
  return transactions
    .filter((transaction) => transaction.amount > 0)
    .map((transaction) => ({
      ...transaction,
      name: transaction.name.replace(/[0-9]/g, ''), // removes numbers from string
    }));
}

// function splitTransactionsByMonth(transactions) {
//   const transactionsByMonth = {};
//   transactions.forEach((transaction) => {
//     const month = format(transaction.date, 'M');
//     transactionsByMonth[month]
//       ? transactionsByMonth[month].push(transaction)
//       : transactionsByMonth[month] = [transaction];
//   });
//   return transactionsByMonth;
// }

function splitTransactionsByMonth(transactions) {
  const today = new Date();
  const transactionsByMonth = [[], []];

  transactions.forEach((transaction, index) => {
    if (Math.abs(differenceInDays(new Date(transaction.date), today)) <= 30) {
      console.log(index, transaction.date);
      transactionsByMonth[0].push(transaction);
    } else {
      console.log('>30', );
      transactionsByMonth[1].push(transaction);
    }
  });
  return transactionsByMonth;
}

function findUniqueTransactions(transactionsByMonth) {
  const uniqueTransactionsByMonth = [[], []];
  transactionsByMonth.forEach((month, index) => {
    const currentTransactions = transactionsByMonth[index];
    currentTransactions.filter((currentTransaction) => {
      const firstIndex = currentTransactions.findIndex((transaction) => transaction.name === currentTransaction.name);
      const lastIndex = currentTransactions.length - 1 - [...currentTransactions].reverse().findIndex((transaction) => transaction.name === currentTransaction.name);
      if (firstIndex && lastIndex && firstIndex === lastIndex) {
        uniqueTransactionsByMonth[index].push(currentTransaction);
      }
    })
  });
  return uniqueTransactionsByMonth;
}

function findRecurringUniqueTransactions(uniqueTransactionsByMonth) {
  // console.log('OONNEE', uniqueTransactionsByMonth[0]);
  console.log('TTWWOO', uniqueTransactionsByMonth[1]);
  const recurringUniqueTransactions = [];
  // const months = Object.keys(uniqueTransactionsByMonth);
  uniqueTransactionsByMonth[0].forEach((currentTransaction) => {
    const transactionExistsInNextMonth = uniqueTransactionsByMonth[1].find((transaction) => (
      transaction.name === currentTransaction.name
      && transaction.amount === currentTransaction.amount
    ));
    // const transactionExistsInThirdMonth = months[2] && uniqueTransactionsByMonth[2].find((transaction) => (
    //   transaction.name === currentTransaction.name
    //   && transaction.amount === currentTransaction.amount
    // ));
    if (transactionExistsInNextMonth) {
      console.log('HEREEEE', );
      recurringUniqueTransactions.push(currentTransaction);
    }
  });
  return recurringUniqueTransactions;
}

export function identifySubscriptions(transactions) {
  const filteredTransactions = filterTransactions(transactions);
  const transactionsByMonth = splitTransactionsByMonth(filteredTransactions);
  // console.log('transactionsByMonth', transactionsByMonth);
  const uniqueTransactionsByMonth = findUniqueTransactions(transactionsByMonth);
  // console.log('uniqueTransactionsByMonth', uniqueTransactionsByMonth);
  const subscriptions = findRecurringUniqueTransactions(uniqueTransactionsByMonth);
  console.log('subscriptions', subscriptions);
  return subscriptions;
}
