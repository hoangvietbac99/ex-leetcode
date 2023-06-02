//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// 1. Two Sum  (easy)
var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (target - nums[i] === nums[j]) {
                return [i, j];
            }
        }
    }
};
