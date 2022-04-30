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

    if ((one>two) && (two>three)) 
    { document.getElementById("output").innerHTML = three + " < " + two + " < " + one;}
    else
    {
        if ((one>three) && (three>two))
        { document.getElementById("output").innerHTML = two + " < " + three + " < " + one;}
        else
        {
            if ((three>one) && (one>two))
            { document.getElementById("output").innerHTML = two + " < " + one + " < " + three;}
            else
            {
                if ((two>three) && (three>one))
                    { document.getElementById("output").innerHTML = one + " < " + three + " < " + two;}
                    else
                {   if ((two>one) && (one>three))
                    { document.getElementById("output").innerHTML = three + " < " + one + " < " + two;}
                    else                    
                    { document.getElementById("output").innerHTML = one + " < " + two + " < " + three;}
                }
            }  
        }  
    }

        //B3: xuất kết quả
    document.getElementById("ketQua").style.display = "block";
    // document.getElementById("output").innerHTML = one + " " + two + " " + three;
}