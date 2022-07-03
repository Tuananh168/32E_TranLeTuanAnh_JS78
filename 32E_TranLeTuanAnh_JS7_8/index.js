// Thêm số
var arrNumber = [];

document.getElementById('btnThemSo').onclick = function() {
    // Input : iSo : number;
    var iSo = Number(document.getElementById('nhapSo').value);
    // output : string 
    var ketQua = '';
    // progress :
    arrNumber.push(iSo);
    ketQua += arrNumber;
    // In ra giao diện :
    document.getElementById('ketQuaMang').innerHTML = ketQua;

}

// Câu 1 : Tính Tổng số dương :
document.getElementById('btnTinhTong').onclick = function() {
    var tongSoHang = 0;
    for (var index = 0; index < arrNumber.length; index++) {
        if (arrNumber[index] >= 0) {
            tongSoHang += arrNumber[index];
        }
    }
    document.getElementById('ketQua_c1').innerHTML = 'Tổng số dương : ' +
        tongSoHang;
}

// Câu 2 : Đếm số dương :
document.getElementById('btnDemSo').onclick = function() {
    var tongSoDuong = 0;
    for (var index = 0; index < arrNumber.length; index++) {
        if (arrNumber[index] >= 0) {
            tongSoDuong += 1;
        }

    }
    document.getElementById('ketQua_c2').innerHTML = 'Số dương :' + tongSoDuong;
}

// Câu 3 : Tìm số nhỏ nhất :
document.getElementById('btnTimSo').onclick = function() {
    var min = arrNumber[0];
    for (index = 1; index < arrNumber.length; index++) {
        if (min > arrNumber[index]) {
            min = arrNumber[index];
        }
    }
    document.getElementById('ketQua_c3').innerHTML = 'Số nhỏ nhất : ' +
        min;
}


// Câu 4 : Tìm số dương nhỏ nhất:
document.getElementById('btnTimSoDuong').onclick = function() {
    for (index = 0; index < arrNumber.length; index++) {
        if (arrNumber[index] > 0) {
            minSoDuong = arrNumber[index]
        }
    }
    for (index = 0; index < arrNumber.length; index++) {
        if (minSoDuong > arrNumber[index] && arrNumber[index] > 0) {
            minSoDuong = arrNumber[index];
        }
    }
    document.getElementById('ketQua_c4').innerHTML = minSoDuong;
}

// Câu 5 : Tìm số chẵn cuối cùng:

document.getElementById('btnTimSoChan').onclick = function() {
        var lastNumber = -1;
        for (index = 0; index < arrNumber.length; index++) {
            if (arrNumber[index] % 2 === 0) {
                lastNumber = index;
            }
        }
        document.getElementById('ketQua_c5').innerHTML = 'Số chẵn cuối cùng : ' + arrNumber[lastNumber];
    }
    // Câu 6 : Đổi chỗ:
document.getElementById('btnDoiCho').onclick = function() {
    var x = Number(document.getElementById('viTri1').value);
    var y = Number(document.getElementById('viTri2').value);

    [arrNumber[x], arrNumber[y]] = [arrNumber[y], arrNumber[x]]

    document.getElementById('ketQua_c6').innerHTML = 'Mảng sau khi đổi : ' +
        arrNumber;
}

//  Câu 7 : Sắp xếp tăng dần.

document.getElementById('btnSapXep').onclick = function() {
    arrNumber.sort(function(a, b) { return a - b });
    document.getElementById('ketQua_c7').innerHTML = arrNumber;
}

// Câu 8 : Tìm số nguyên tố đầu tiên .


document.getElementById('btnNguyenTo').onclick = function() {
    // var indexSoNguyenTo = 0;
    var iSo = 0;
    for (index = 0; index < arrNumber.length; index++) {
        iSo = arrNumber[index];
        kiemTra = kiemTraNguyenTo(iSo);
        if (kiemTra) {
            iSo = 'Số Nguyên Tố đầu tiên : ' + arrNumber[index];
            break;
        } else {
            iSo = -1;
        }
    }
    document.getElementById('ketQua_c8').innerHTML = iSo;
}


function kiemTraNguyenTo(so) {
    var kiemTra = true
    for (uoc = 2; uoc <= so / 2; uoc++) {
        if (so % uoc == 0) {
            kiemTra = false;
            break;
        }
    }
    return kiemTra;
}

// Câu 9 : Đếm số nguyên.
var mangThem = [];

document.getElementById('btnMangThem').onclick = function() {

    var themSo = Number(document.getElementById('nhapSo_9').value);
    var ketQua = '';
    mangThem.push(themSo);
    ketQua += mangThem;
    document.getElementById('ketQua_9').innerHTML = ketQua;
}

document.getElementById('btnDemSoNguyen').onclick = function() {
    var dem = 0;
    for (index = 0; index < mangThem.length; index++) {
        var result = Number.isInteger(mangThem[index]);
        if (result) {
            dem++
        }
    }
    document.getElementById('ketQua_c9').innerHTML = 'Số Nguyên : ' +
        dem;
}

// Câu 10 : So sánh số lương số âm và dương

document.getElementById('btnSoSanh').onclick = function() {
    var soDuong = 0;
    var soAm = 0;
    for (index = 0; index < arrNumber.length; index++) {
        if (arrNumber[index] == 0) {
            soDuong = 0;
            soAm = 0;
        } else if (arrNumber[index] < 0) {
            soAm++
        } else {
            soDuong++
        }
    }
    var ketQua = '';
    if (soAm > soDuong) {
        ketQua = ' lớn hơn ';
    } else if (soAm < soDuong) {
        ketQua = ' nhỏ hơn '
    } else {
        ketQua = ' bằng '
    }
    document.getElementById('ketQua_c10').innerHTML = 'Số âm ' + ketQua + ' số dương';
}