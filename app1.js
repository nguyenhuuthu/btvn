// //1

let Vatly = prompt("Nhập điểm vật lý: ");
let Hoa = prompt("Nhập điểm Hóa Học: ");
let Sinh = prompt("Nhập điểm Sinh Học: ");
let TBinh = (Number(Vatly) + Number(Hoa) + Number(Sinh))/3;
let tong = Number(Vatly) + Number(Hoa) + Number(Sinh);
console.log("Điểm trung bình là : "+ TBinh);
console.log("Tổng điểm 3 môn là " + tong);
//2

let giaTriDoC = prompt("Nhap gia tri do C: ");
let giatriDoF = (Number(giaTriDoC)*9/5) + 32;
console.log("Giá trị độ F là : "+ giatriDoF);


// 3 tính dien tích hình tròn
let bankinh = 12;
let pi = 3.14;
let dientichHT3 = Number(bankinh) * Number(bankinh) * pi;
console.log("Diện tích hình tròn là : "+ dientichHT3);

// 4
let canhHv = 10;
let dientichHV = Number(canhHv) * Number(canhHv);
console.log("Diện tích hình vuông là : "+ dientichHV);