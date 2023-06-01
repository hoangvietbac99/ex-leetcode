//You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order,
//and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
//2. Add Two Numbers

function addTwoNumbers(l1, l2) {
    num1 = Number(l1.reverse().toString().replace(/,/g, ""));
    num2 = Number(l2.reverse().toString().replace(/,/g, ""));

    let sum = num1 + num2;
    let d = Array(sum.toString().split("").reverse())[0];
    let result = d.flatMap((i) => parseInt(i, 10));
    return result;
}
