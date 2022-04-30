// sơ đồ 3 khối

// input: 3 số nguyên

// process: (pseudo code)
// 1. lấy đc input (hardcode) với 3 biến soThuNhat, soThuHai và soThuBa
// 2. tạo các biến var first, second, third chứa giá trị.
// 3. sử dụng if elses
// 4. log kết quả ra màn hình

// output: 3 số theo thứ tự tăng dần

function check() {
    //B1: DOM tới các thẻ cần thay đổi

var one = document.getElementById("soThuNhat").value;
var two = document.getElementById("soThuHai").value;
var three = document.getElementById("soThuBa").value;
var even = 0;
var odd = 0;

    //B2: Thực hiện so sánh
one = one % 2
console.log(one)
if (one==0) 
{ even = even + 1 } 
else { odd = odd +1 };

two = two % 2
if ( two == 0) 
{ even = even + 1 } 
else { odd = odd +1 };

three = three % 2
if (three == 0) 
{ even = even + 1 } 
else { odd = odd +1 };

    //B3: xuất kết quả
document.getElementById("ketQua").style.display = "block";
document.getElementById("output").innerHTML =  "Kết quả có " + even + " số chẵn và " + odd + " số lẻ";
}