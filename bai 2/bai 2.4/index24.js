//Bài 1: Viết lại cấu trúc if sau thành cấu trúc switch
let browser = prompt("Enter browser name!");
switch (browser) {
    case 'Edge':
        alert("You've got the Edge!");
        break;
    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
        alert('Okay we support these browsers too');
        break;
    default:
        alert('We hope that this page looks ok!');
}

//Bài 2: Viết lại cấu trúc if sau thành cấu trúc switch
let browser2 = prompt("Enter browser name!");
switch (browser2) {
    case 'Edge':
        alert("You've got the Edge!");
        break;
    default:
        if (['Chrome', 'Firefox', 'Safari', 'Opera'].includes(browser2)) {
            alert('Okay we support these browsers too');
        } else {
            alert('We hope that this page looks ok!');
        }
}

//Bài 3: Sử dụng cấu trúc if…else, nhập vào một số, kiểm tra giá trị của số nhập vào
let number = parseInt(prompt("Nhập vào một số:"));
if (number > 0) {
    alert(1);
} else if (number < 0) {
    alert(-1);
} else {
    alert(0);
}

