// Khai bao service tuong tac api
 var svService = new SinhVienService();

// ------------ Giao  tiếp với API thông qua axios ------------
var getApiSinhVien = function(){
    var objectAPI ={
        url:'http://svcy.myclass.vn/api/SinhVien/LayDanhSachSinhVien',
         // Đường dẫn đi đến file hoặc link back end cung cấp
         method:'GET' // Phương thức backend cung cấp;  
    }
    // gửi yêu cầu dữ liệu trên back end => backend tả về promise
    // hàm này là hàm bất đồng bộ khi nó đang chạy thì mấy dòng dưới vẫn chạy bình thường
    var promise = axios(objectAPI);
    // xử lí thành công thì render table
    var funcSuccess = function(result){
    renderTableSinhVien(result.data);
    }
    
    // xử lí thất bại
    var funcFail = function (error) {
        console.log(error);
    }
    // then() : hàm nhận vào giá trị là 1 hàm xử lí thành công
    
    //catch(): hàm nhận vào giá trị là 1 hàm xử lí thất bại
    // hàm then mặc định có tham số trả về
    promise.then(funcSuccess).catch(funcFail);
    // Lưu ý : ajax là 1 kĩ thuật xử lí bất đồng bộ.
}

getApiSinhVien();

var renderTableSinhVien = function(mangSinhVien){
    var Table ='';
// Sau khi lấy được data từ backEnd => tạo bảng giao diện
for( var i = 0; i <mangSinhVien.length; i++){
    var sinhVien = mangSinhVien[i];
    // tạo ra 1 sv object từ prototype sinh viên
    var sv = new SinhVien();
    sv.maSV = sinhVien.MaSV;
    sv.tenSV = sinhVien.HoTen;
    sv.email = sinhVien.Email;
    sv.diemToan = sinhVien.DiemToan;
    sv.diemHoa = sinhVien.DiemHoa;
    sv.diemLy = sinhVien.DiemLy;
    sv.diemRenLuyen = 5;
    Table += `
                <tr>
                    <td>${sv.maSV} </td>
                    <td>${sv.tenSV}</td>
                    <td>${sv.email}</td>
                    <td>${sv.xepLoai()}</td>
                    <td>${sv.tinhDiemTrungBinh()}</td>
                    <td>${sv.diemRenLuyen}</td>
                    
                    <td>
                    <button class="btn btn-primary" onclick="chinhSuaSinhVien('${sv.maSV}')">Chỉnh sửa</button>
                    <button class="btn btn-danger" onclick="xoaSinhVien('${sv.maSV}')">Xóa</button>
                    </td>
                </tr>`
};
// lấy ra từng sinh viên trong dữ liệu backend trả về

            // Dom đến giao diện ghi thông tin dữ liệu vào
document.getElementById('tableSinhVien').innerHTML = Table; 

};
        

// ---- Thêm dữ liệu cho sever Qua api post -----
document.getElementById('btnThemSinhVien').onclick = function(){
    // lấy thông tin từ người dùng 
    var sinhVien = {
        MaSV: document.getElementById('maSinhVien').value ,
        HoTen: document.getElementById('tenSinhVien').value ,
        Email: document.getElementById('email').value,
        SoDT:1234234314 ,
        CMND:23412342341234 ,
        DiemToan: document.getElementById('diemToan').value,
        DiemLy: document.getElementById('diemLy').value,
        DiemHoa: document.getElementById('diemHoa').value
    }
    


console.log(sinhVien);
// dùng axios gọi ajax đưa dữ liệu lên back end xử lí

var objectAxios = {
    url:'http://svcy.myclass.vn/api/SinhVien/ThemSinhVien',
    method:'POST',
    data:sinhVien // thuộc tính backend yêu cầu dữ liệu gửi đi phải đúng định dạng
}
var promise = axios(objectAxios);
promise.then(function(result){
    // Thêm Thành công gọi lại api lấy danh sách sinh Viên mới về
    getApiSinhVien();
}).catch(function(error){
    console.log(error);
})
}

// ----- xoa Sinh Vien
var xoaSinhVien = function(maSV){
    // Dung service goi api xoa
    var promise = svService.xoaSinhVien(maSV);

    promise.then(function(result){
        // xoa thanh cong thi load lai api get layDanhSachSinhVien
        getApiSinhVien();
        console.log(result.data)
    }).catch(function(error){
        console.log(error); 
    })
}

// ---- lay thong tin sinh vien -----
var chinhSuaSinhVien = function(maSV){

    var promise = svService.layThongTinSinhVien(maSV);
    
    promise.then(function(result){
        console.log(result.data)
        var sinhVienEdit = result.data;
document.getElementById('maSinhVien').value = sinhVienEdit.MaSV;
document.getElementById('tenSinhVien').value = sinhVienEdit.HoTen;
document.getElementById('diemToan').value = sinhVienEdit.DiemToan;
document.getElementById('diemLy').value = sinhVienEdit.DiemLy;
document.getElementById('diemHoa').value = sinhVienEdit.DiemHoa;
document.getElementById('email').value = sinhVienEdit.Email;

// Khoá lại không cho người dùng chỉnh sửa
document.getElementById('maSinhVien').disabled = true;
document.getElementById('btnThemSinhVien').disabled =true;
    }).catch(function(error){
        console.log(error);
    })
}
//----------- Lưu thông tin sinh viên -----------
document.getElementById('btnLuuSinhVien').onclick = function(){
    // Lấy thông tin sinh viên gán vào data gửi lên api

    var sinhVienCapNhap = {
        
            "MaSV": document.getElementById('maSinhVien').value,
            "HoTen": document.getElementById('tenSinhVien').value,
            "Email": document.getElementById('email').value,
            "SoDT": "123456896",
            "CMND": "123456789",
            "DiemToan": document.getElementById('diemToan').value,
            "DiemLy": document.getElementById('diemHoa').value,
            "DiemHoa": document.getElementById('diemHoa').value
        
    }

    // gọi service cập nhập dữ liệu server
    var promise = svService.capNhapSinhVien(sinhVienCapNhap);
    promise.then(function(result){
        console.log(result.data);
        // load lại table 
        getApiSinhVien();
        // mở khóa nút thêm sinh viên
        document.getElementById('btnThemSinhVien').disabled = false;
        document.getElementById('maSinhVien').disabled = false;
        document.getElementById('btnLuuSinhVien').disabled = true;
    })
    console.log(sinhVienCapNhap);
}