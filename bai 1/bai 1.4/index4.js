let num1 = prompt("Nhập vào số nguyên thứ nhất:");
let num2 = prompt("Nhập vào số nguyên thứ hai:");
let num3 = prompt("Nhập vào số nguyên thứ ba:");

num1 = parseInt(num1);
num2 = parseInt(num2);
num3 = parseInt(num3);

let max = num1;
if (num2 > max) {
    max = num2;
}
if (num3 > max) {
    max = num3;
}
document.getElementById("result").innerText = `Giá trị lớn nhất trong ba số là: ${max}`;