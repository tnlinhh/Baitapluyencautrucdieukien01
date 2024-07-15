let minutes = prompt("Nhập vào số phút đã sử dụng:");
minutes = parseInt(minutes);
let cost;
if (minutes <= 100) {
    cost = minutes * 500;
} else if (minutes <= 200) {
    cost = (100 * 500) + ((minutes - 100) * 350);
} else {
    cost = (100 * 500) + (100 * 350) + ((minutes - 200) * 200);
}
document.getElementById("result").innerText = `Số phút đã sử dụng: ${minutes} phút - Cước điện thoại: ${cost} đồng`;