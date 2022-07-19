var coinChange = function (coins, amount) {
  let dp = Array(amount + 1).fill(amount + 1);

  dp[0] = 0;
  console.log(dp);
  for (let i = 1; i < dp.length; i++) {
    for (const coin of coins) {
      if (i - coin >= 0) {
        dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
      }
    }
  }
  return dp[amount] === amount + 1 ? -1 : dp.pop();
};

console.log(coinChange([1, 2, 5], 11));
