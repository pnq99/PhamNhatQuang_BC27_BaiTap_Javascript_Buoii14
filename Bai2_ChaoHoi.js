// sơ đồ 3 khối

// input: B, M, A và E

// process: (pseudo code)
// 1. lấy đc input (hardcode) với biến who
// 2. sử dụng if elses
// 3. log kết quả ra màn hình

// output: xin chào

function family() {
    //B1: DOM tới các thẻ cần thay đổi

var whoE1 = document.getElementById("who").value;

    //B2: Thực hiện so sánh
    if (whoE1 === 'B'){
        document.getElementById("output").innerHTML = "Hello Father!!!";
    }
    
    if (whoE1 === 'M'){
        document.getElementById("output").innerHTML = "Hello Mother!!!";
    }
      
    if (whoE1 === 'A'){
        document.getElementById("output").innerHTML = "Hello Brother!!!";
    }
       
    if (whoE1 === 'E'){
        document.getElementById("output").innerHTML = "Hello Daughter!!!";
    }
            
    //B3: xuất kết quả
document.getElementById("ketQua").style.display = "block";
}