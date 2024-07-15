let doanhso = prompt("Nhập vào doanh số bán hàng:");
doanhso = parseFloat(doanhso);
let hoahong;
if (doanhso <= 10000) {
    hoahong = doanhso * 0.05;
} else if (doanhso <= 20000) {
    hoahong = doanhso * 0.10;
} else {
    hoahong = doanhso * 0.15;
}
document.getElementById("result").innerText = `Doanh số: ${doanhso} - Hoa hồng nhận được: ${hoahong}`;