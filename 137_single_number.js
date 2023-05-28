{
    var nums1371 = [2, 2, 1, 2];
    var nums1372 = [0, 1, 0, 1, 0, 1, 99];
    var nums1373 = [0];
    function singleNumber(nums137) {
        nums137.sort();
        let result;
        for (let i = 0; i <= nums137.length - 1; i += 3) {
            if (nums137[i] * 2 !== nums137[i + 1] + nums137[i + 2]) {
                return (result = nums137[i]);
            }
        }
    }
    let result1371 = singleNumber(nums1371);
    let result1372 = singleNumber(nums1372);
    let result1373 = singleNumber(nums1373);

    console.log(`result_137_1: ${result1371}`);
    console.log(`result_137_2: ${result1372}`);
    console.log(`result_137_3: ${result1373}`);
}
