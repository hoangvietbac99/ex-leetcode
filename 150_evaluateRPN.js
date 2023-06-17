// You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation.
// Evaluate the expression. Return an integer that represents the value of the expression.
// Note that:
// The valid operators are '+', '-', '*', and '/'.
// Each operand may be an integer or another expression.
// The division between two integers always truncates toward zero.
// There will not be any division by zero.
// The input represents a valid arithmetic expression in a reverse polish notation.
// The answer and all the intermediate calculations can be represented in a 32-bit integer.

function evalRPN(tokens) {
  const nums = [];
  for (let i = 0; i <= tokens.length - 1; i++) {
    if (!isNaN(tokens[i])) {
      // nếu tokens[i] không phải là NaN
      nums.push(Number(tokens[i]));
    } else {
      const result = (num1, cal, num2) => {
        switch (cal) {
          case "+":
            return nums.push(num2 + num1);
          case "-":
            return nums.push(num2 - num1);
          case "*":
            return nums.push(num2 * num1);
          case "/":
            if (num1 === 0) {
              return nums.push(parseInt(num1 / num2));
            } else {
              return nums.push(parseInt(num2 / num1));
            }
          default:
            break;
        }
      };
      result(nums.pop(), tokens[i], nums.pop()); // sẽ luôn lấy giá trị 2 số cuối của mảng nums làm giá trị cho phép toán hiện tại
      // vì theo " Reverse Polish Notation" 2 giá trị đó sẽ đứng ngay trước toán tử của phép toán
    }
  }
  return Number(nums);
}
