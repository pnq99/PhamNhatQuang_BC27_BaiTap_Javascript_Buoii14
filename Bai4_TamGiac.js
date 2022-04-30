// sơ đồ 3 khối

// input: 3 số nguyên

// process: (pseudo code)
// 1. lấy đc input (hardcode) với 3 biến soThuNhat, soThuHai và soThuBa
// 2. tạo các biến var first, second, third chứa giá trị.
// 3. sử dụng if elses
// 4. log kết quả ra màn hình

// output: 3 số theo thứ tự tăng dần

function tamGiac() {
    //B1: DOM tới các thẻ cần thay đổi

var one = document.getElementById("soThuNhat").value;
var two = document.getElementById("soThuHai").value;
var three = document.getElementById("soThuBa").value;

    //B2: Thực hiện so sánh

if ((one == two) || (one == three) || (two==three))
    {
        document.getElementById("output").innerHTML = "3 cạnh được nhập tạo nên tam giác cân";
    }

if ((one == two) && (one == three) && (two==three))
    {
        document.getElementById("output").innerHTML = "3 cạnh được nhập tạo nên tam giác đều";
    }
   var count1 = one**2;
   var count2 = two**2;
   var count3 = three**2;

if ((count1 + count2 == count3) 
|| (count1 + count3 == count2) 
|| (count1 == count2 + count3))
    {
        document.getElementById("output").innerHTML = "3 cạnh được nhập tạo nên tam giác vuông";
    }

    //B3: xuất kết quả
document.getElementById("ketQua").style.display = "block";
}