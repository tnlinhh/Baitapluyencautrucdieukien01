// Bài 1: Nhập vào tuổi trong biến age, in ra 'Đủ tuổi' nếu age > 18
let age = parseInt(prompt("Nhập vào tuổi của bạn:"));
if (age > 18) {
    alert('Đủ tuổi');
}

//Bài 2: Nhập và a, in ra 'Hello' nếu a chẵn, 'Hi' nếu a lẻ
let a = parseInt(prompt("Nhập vào một số:"));
if (a % 2 === 0) {
    alert('Hello');
} else {
    alert('Hi');
}

//Bài 3: Nhập vào a, b. Nếu a>b in ra tổng, nếu a<b in ra tích, nếu a =b in ra 'Hihi'
let b = parseFloat(prompt("Nhập vào giá trị b:"));
let c = parseFloat(prompt("Nhập vào giá trị c:"));

if (b > c) {
    alert("Tổng: " + (b + c));
} else if (b < c) {
    alert("Tích: " + (b * c));
} else {
    alert('Hihi');
}

//Bài 4: Nhập d, e, f. In ra số lớn nhất
let d = parseFloat(prompt("Nhập vào giá trị d:"));
let e = parseFloat(prompt("Nhập vào giá trị e:"));
let f = parseFloat(prompt("Nhập vào giá trị f:"));

let max = d; 

if (e > max) {
    max = e;
}
if (f > max) {
    max = f;
}

alert("Số lớn nhất là: " + max);


