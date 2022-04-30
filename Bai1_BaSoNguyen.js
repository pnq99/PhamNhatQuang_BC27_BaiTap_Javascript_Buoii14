// sơ đồ 3 khối

// input: 3 số nguyên

// process: (pseudo code)
// 1. lấy đc input (hardcode) với 3 biến soThuNhat, soThuHai và soThuBa
// 2. tạo các biến var first, second, third chứa giá trị.
// 3. sử dụng if elses
// 4. log kết quả ra màn hình

// output: 3 số theo thứ tự tăng dần

function sort() {
        //B1: DOM tới các thẻ cần thay đổi
    
    var one = document.getElementById("soThuNhat").value;
    var two = document.getElementById("soThuHai").value;
    var three = document.getElementById("soThuBa").value;
    var temp;

        //B2: Thực hiện so sánh

    if (one>two) 
    {
         temp = one;
         one = two;
         two = temp;
    }

    if (one>three) 
    {
        temp = one;
        one = three;
        three = temp;        
    }

    if (two>three)
    {
        temp = two;
        two = three;
        three = temp;
    }

        //B3: xuất kết quả
    document.getElementById("ketQua").style.display = "block";
    document.getElementById("output").innerHTML = one + " " + two + " " + three;
}