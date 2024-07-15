let diemkiemtra = prompt("Nhập vào điểm bài kiểm tra:");
let diemgiuaky = prompt("Nhập vào điểm thi giữa kỳ:");
let diemcuoiky = prompt("Nhập vào điểm thi cuối kỳ:");

diemkiemtra = parseFloat(diemkiemtra);
diemgiuaky = parseFloat(diemgiuaky);
diemcuoiky = parseFloat(diemcuoiky);

// Tính điểm trung bình
let trungbinh = (diemkiemtra + diemgiuaky + diemcuoiky) / 3;
// Xếp hạng học lực
let rank;
if (trungbinh >= 8.5) {
    rank = "Giỏi";
} else if (trungbinh >= 7.0) {
    rank = "Khá";
} else if (trungbinh >= 5.0) {
    rank = "Trung bình";
} else {
    rank = "Yếu";
}
document.getElementById("ketqua").innerText = `Xếp hạng: ${rank}`;