//Write an algorithm to determine if a number n is happy.
//A happy number is a number defined by the following process:
//Starting with any positive integer, replace the number by the sum of the squares of its digits.
//Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
//Those numbers for which this process ends in 1 are happy.
//Return true if n is a happy number, and false if not.
function isHappy(n) {
    const sumArr = [];

    function happy(n, arr) {
        const arrayN = Array.from(String(n), (stringNum) => Number(stringNum)); // tách n thành mảng

        let sum = 0; // là tổng bình phương của các sô
        for (let i = 0; i <= arrayN.length - 1; i++) {
            sum += Math.pow(arrayN[i], 2);
        }
        if (sum === 1) return true;
        if (arr.includes(sum) === true) return false; //nếu trước đó đã có sum -> loops endlessly in a cycle
        arr.push(sum);
        return happy(sum, arr);
    }
    return happy(n, sumArr);
}
