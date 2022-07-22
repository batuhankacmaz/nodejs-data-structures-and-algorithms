var subsets = function (nums) {
  let res = [];
  let subres = [];

  let dfs = (i) => {
    if (i >= nums.length) {
      console.log(subres);
      res.push([...subres]);
      return;
    }

    //right side the three

    dfs(i + 1);
    //left side the tree
    subres.push(nums[i]);
    dfs(i + 1);
    subres.pop();
  };
  dfs(0);
  return res;
};

// Combination sum

function combinationSum(candidates, target) {
  candidates.sort((a, b) => a - b);
  const combos = [];
  const combo = [];
  const set = new Set(candidates);
  buildCombos(target);
  return combos;
  function buildCombos(target, start = 0) {
    if (set.has(target)) {
      combo.push(target);
      combos.push(combo.slice());
      combo.pop();
    }

    const mid = Math.floor(target / 2);

    for (let i = start; i < candidates.length && candidates[i] <= mid; i++) {
      const candidate = candidates[i];
      combo.push(candidate);
      buildCombos(target - candidate, i);
      combo.pop();
    }
  }
}

// PERMUTATE

var permute = function (nums) {
  // global result
  const result = [];

  // dfs recursive helper
  const dfs = (i) => {
    // base case
    if (i === nums.length) {
      result.push(nums.slice());
      return;
    }

    //dfs recursive case
    for (let j = i; j < nums.length; j++) {
      console.log("i", i);
      console.log("j", j);
      [nums[i], nums[j]] = [nums[j], nums[i]];
      dfs(i + 1);
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  };
  dfs(0, nums);
  return result;
};
console.log(permute([1, 2, 3]));

// SUBSETS II

var subsetsWithDup = function (nums) {
  nums.sort((a, b) => a - b);
  const results = [];
  const result = [];
  getSubsets();
  return results;

  function getSubsets(start = 0) {
    results.push(result.slice());

    for (let i = start; i < nums.length; i++) {
      if (i !== start && nums[i] === nums[i - 1]) {
        continue;
      }
      result.push(nums[i]);
      getSubsets(i + 1);
      result.pop();
    }
  }
};

function combinationSum2(candidates, target) {
  candidates.sort((a, b) => a - b);
  const combos = [];
  const combo = [];
  const map = {};

  for (let i = 0; i < candidates.length; i++) {
    map[candidates[i]] = i;
  }

  getCombos(target);
  return combos;

  function getCombos(target, start = 0) {
    if (target in map && start <= map[target]) {
      combo.push(target);
      combos.push(combo.slice());
      combo.pop();
    }

    const mid = Math.floor(target / 2);
    for (let i = start; i < candidates.length && candidates[i] <= mid; i++) {
      if (i !== start && candidates[i] === candidates[i - 1]) {
        continue;
      }
      combo.push(candidates[i]);
      getCombos(target - candidates[i], i + 1);
      combo.pop();
    }
  }
}
