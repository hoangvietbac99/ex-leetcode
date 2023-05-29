{
    function singleNumber(nums) {
        nums.sort();
        let result;
        for (let i = 0; i <= nums.length - 1; i += 3) {
            if (nums[i] * 2 !== nums[i + 1] + nums[i + 2]) {
                return (result = nums[i]);
            }
        }
    }
}
