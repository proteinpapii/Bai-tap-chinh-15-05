/* Bài 1: Tính tiền lương cho nhân viên */

// Input: Nhập vào lương 1 ngày, số ngày làm.
/* Progress: 
    - Tạo sự kiện click cho button
    - DOM lấy giá trị của các thẻ
    - Tạo hàm
*/ 
// Output: Xuất ra tổng tiền lương

var btnTinhLuong = document.getElementById('btnTinhLuong');

btnTinhLuong.onclick = function () {
    var luong1Ngay = document.getElementById('luong1Ngay').value;

    var soNgayLam = document.getElementById('soNgayLam').value;

    var salary;

    salary = luong1Ngay * soNgayLam;

    document.getElementById('tongLuong').innerHTML = salary.toLocaleString();

};


/* Bài 2: Tính giá trị trung bình của 5 số thực */

// Input: Nhập vào 5 số thực
/* Progress:
    - Tạo sự kiện click cho button
    - DOM lấy giá trị của từng số thực mà user nhập
    - Chuyển string sang number
    - Tạo hàm tính giá trị trung bình
    - Giá trị trung bình là: (số thực 1 + số thực 2 + số thực 3 + số thực 4 + số thực 5) / 5
*/  
// Output: Xuất giá trị trung bình vào thẻ span

var btnTinhTrungBinh = document.getElementById('btnTinhTrungBinh');

btnTinhTrungBinh.onclick = function () {
    var soThuc1 = document.getElementById('soThuc1').value;
    var soThuc2 = document.getElementById('soThuc2').value;
    var soThuc3 = document.getElementById('soThuc3').value;
    var soThuc4 = document.getElementById('soThuc4').value;
    var soThuc5 = document.getElementById('soThuc5').value;

    soThuc1 = parseInt(soThuc1);
    soThuc2 = parseInt(soThuc2);
    soThuc3 = parseInt(soThuc3);
    soThuc4 = parseInt(soThuc4);
    soThuc5 = parseInt(soThuc5);

    var average;

    average = (soThuc1 + soThuc2 + soThuc3 + soThuc4 + soThuc5) / 5;

    document.getElementById('tinhTrungBinh').innerHTML = average;
};


// Bài 3: Quy đổi tiền

//  Input: Nhập vào số tiền USD muốn quy đổi
/* Progress:
    - Tạo sự kiện click nút button
    - DOM tới input nhập USD để lấy value
    - Chuyển string USD thành number USD bằng parseInt
    - Tạo hàm quy đổi: số tiền USD * 23 500 VND
*/ 
// Output: Show ra cho user số tiền VND đã được quy đổi

var btnQuyDoi = document.getElementById('btnQuyDoi');

btnQuyDoi.onclick = function() {
    var USD = document.getElementById('USD').value;

    USD = parseInt(USD);

    var exchange;

    exchange = USD * 23500;

    document.getElementById('quyDoiTien').innerHTML = new Intl.NumberFormat('vn-VN', { style: 'currency', currency: 'VND' }).format(exchange);
};
