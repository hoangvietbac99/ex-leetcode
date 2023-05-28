//Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
{
    function singleNumber(nums) {
        nums.sort();
        let result;
        for (let i = 0; i <= nums.length - 1; i += 2) {
            if (nums[i] !== nums[i + 1]) {
                return (result = nums[i]);
            }
        }
    }
}
