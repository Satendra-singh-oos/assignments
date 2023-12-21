/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let ans = [];
  let n = transactions.length;

  for (let i = 0; i < n; i++) {
    let cate = transactions[i].category;
    let price = transactions[i].price;

    let categoryIndex = ans.findIndex((item) => item.category === cate);

    if (categoryIndex !== -1) {
      ans[categoryIndex].totalSpent += price;
    } else {
      ans.push({ category: cate, totalSpent: price });
    }
  }

  return ans;
}

module.exports = calculateTotalSpentByCategory;
