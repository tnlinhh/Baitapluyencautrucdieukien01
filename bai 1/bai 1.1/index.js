// Bai 1
let a = prompt("Nhap so:");
let b = prompt("Nhap so:");
a = parseInt(a);
b = parseInt(b);
if (b === 0){
    alert("Khong the chia het cho 0");
} else if (a % b === 0){
    alert("a chia het cho b");
} else {
    alert("a khong chia het cho b");
}


