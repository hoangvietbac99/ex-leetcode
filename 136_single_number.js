//Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
{
    var nums1361 = [2, 1, 2];
    var nums1362 = [9, 3, 2, 3, 2];
    var nums1363 = [1];

    function singleNumber(nums136) {
        nums136.sort();
        let result;
        for (let i = 0; i <= nums136.length - 1; i += 2) {
            if (nums136[i] !== nums136[i + 1]) {
                return (result = nums136[i]);
            }
        }
    }

    let result1361 = singleNumber(nums1361);
    let result1362 = singleNumber(nums1362);
    let result1363 = singleNumber(nums1363);

    console.log(`result_136_1: ${result1361}`);
    console.log(`result_136_2: ${result1362}`);
    console.log(`result_136_3: ${result1363}`);
}
