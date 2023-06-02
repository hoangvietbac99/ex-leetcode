//Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent,
//with the colors in the order red, white, and blue.
//We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
//You must solve this problem without using the library's sort function.
//75. Color Sort (Medium)
function sortColor(nums) {
    let index = 0;
    let red = 0;
    let blue = nums.length - 1;
    while (index <= blue) {
        //lấy blue làm điều kiện vì "2" sẽ được hoán đổi xuống cuối mảng và ta sẽ không cần check lại
        if (nums[index] === 0) {
            [nums[index], nums[red]] = [nums[red], nums[index]]; //hoán đổi vị trí của index với vị trí red
            index++;
            red++;
        } else if (nums[index] === 1) {
            index++;
        } else if (nums[index] === 2) {
            [nums[index], nums[blue]] = [nums[blue], nums[index]]; //hoán đổi vị trí của index với vị trí blue
            //không cho index++ vì cần check lại vị trí index sau khi hoán đổi cho đến khi nó khác "2"
            blue--; //giảm bớt độ dài cần check của mảng
        }
    }
    return nums;
}
