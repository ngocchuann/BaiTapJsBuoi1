/**
 * Tính tổng 2 ký số
 * Khối 1: Input( 1 số có 2 chữ số)
 * ví dụ: 12, 45, 56,...
 * Khối 2: 
 *?Toạ biến:
 *number ( số có 2 chữ số)
 *soHangChuc, soDonvi
 *?Lập công thức:
 *ví dụ: number=21
 *soHangChuc = Math.floor(number/10) =>20
 *soDonVi = Math.floor(number%10) =>1
 *tong = soHangChuc+soDonvi
 *?Thông báo kết quả:
 * Khối 3: Output
 */
var number = 23;
var soDonVi = 0;
var soHangChuc = 0;
var tong = 0;

soHangChuc = Math.floor(number/10);
soDonVi = number % 10;
tong = soDonVi+ soHangChuc;
console.log("Tong hai chu so:",tong);