// điều hướng giao diện cho file trùng tên với nó 
// chứa thông tin tất cả sinh viên được thêm từ form
var mangSinhVien =[];
var validate = new Validation();




document.getElementById('btnThemSinhVien').onclick = function(){
    // Lấy thông tin sinh viên thêm vào đốii tượng 
    var sinhVien = new SinhVien();
    sinhVien.maSV = document.getElementById('maSinhVien').value;
    sinhVien.tenSV =document.getElementById('tenSinhVien').value;
    sinhVien.email=document.getElementById('email').value;
    sinhVien.loaiSV = document.getElementById('loaiSinhVien').value;
    sinhVien.diemHoa =document.getElementById('diemHoa').value;
    sinhVien.diemLy =document.getElementById('diemLy').value;
    sinhVien.diemToan =document.getElementById('diemToan').value;
    sinhVien.diemRenLuyen = document.getElementById('diemRenLuyen').value;
// Kiểm tra dữ liệu hợp lệ trước khi thêm vào mảng (Kỹ thuật đặt cờ JaVa)

    var valid = validate.kiemTraRong(sinhVien.maSV, '#error_maSinhVien')&validate.kiemTraRong(sinhVien.tenSV,'#error_tenSinhVien')&validate.kiemTraRong(sinhVien.email,'#error_email')& validate.kiemTraRong(sinhVien.diemToan,'#error_diemToan')& validate.kiemTraRong(sinhVien.diemHoa,'#error_Hoa') & validate.kiemTraRong(sinhVien.diemLy,'#error_diemLy')& validate.kiemTraRong(sinhVien.diemRenLuyen,'#error_diemRenLuyen');



// kiểm tra chuỗi nhập 

// kiểm tra tên là ký tự
// var regexAllLeter =/^[a-z A-Z]+$/;
// // test dùm để  kiểm tra cái chuỗi khai báo ở trên có đúng hay không
// if(regexAllLeter.test(sinhVien.tenSV)){
//     document.getElementById('error_all_letter_tenSinhVien').innerHTML = ''
//     document.getElementById('error_all_letter_tenSinhVien').style.display ='none';
    
// }else{
//     document.getElementById('error_all_letter_tenSinhVien').innerHTML ='Sai cmnr';
//     document.getElementById('error_all_letter_tenSinhVien').style.display ='block';  
//     valid =false; 
// }
valid &= validate.kiemTraTatCaLaChuoi(sinhVien.tenSV,'#error_all_letter_tenSinhVien')&validate.kiemTraEmail(sinhVien.email,'#error_all_letter_email') & validate.kiemTraMaSinhVien(sinhVien.maSV,'#error_all_letter_maSinhVien');

// kiểm tra nhập số điểm toán lishoas rèn luyện
valid &= validate.kiemTraTatCaLaSo(sinhVien.diemToan,'#eror_all_number_diemToan')&validate.kiemTraTatCaLaSo(sinhVien.diemHoa,'#eror_all_number_diemHoa')&validate.kiemTraTatCaLaSo(sinhVien.diemLy,'#eror_all_number_diemLy')&validate.kiemTraTatCaLaSo(sinhVien.diemRenLuyen,'#eror_all_number_diemRenLuyen');



// ---------kiểm tra gia trị---------

valid &= validate.kiemTraGiaTri(sinhVien.diemToan,'#eror_min_max_value_diemToan',0,10)&validate.kiemTraGiaTri(sinhVien.diemHoa,'#eror_min_max_value_diemHoa',0,10)&validate.kiemTraGiaTri(sinhVien.diemLy,'#eror_min_max_value_diemLy',0,10)&validate.kiemTraGiaTri(sinhVien.diemRenLuyen,'#eror_min_max_value_diemRenLuyen',0,10);

// Kiểm tra min max length của id

    valid &= validate.kiemTraDoDai(sinhVien.maSV,'#error_min_max_length',5,10);


// Trim(): Phương thức loại bỏ khoảng trồng đầu cuối của chuỗi
    // if(sinhVien.maSV.trim() ===''){
    //     //dom đến thẻ thông báo dduoiws thẻ s input maSv
    //     document.getElementById('error_maSinhVien').style.display = 'block';
    //     document.getElementById('error_maSinhVien').innerHTML = 'Mã sinh viên không được bỏ trống!';
    //     valid =false;
    // }else{ // trường hớp người dùng nhập hợp lệ (display none, gán rỗng lỗi)
    //     document.getElementById('error_maSinhVien').style.display ='none';
    // };
    // if(sinhVien.tenSV.trim()===''){
    //     //dom đến thẻ thông báo dduoiws thẻ s input maSv
    //     document.getElementById('error_tenSinhVien').style.display = 'block';
    //     document.getElementById('error_tenSinhVien').innerHTML = 'tên sinh viên không được bỏ trống!';
    //     valid =false;
    // }else{ // trường hớp người dùng nhập hợp lệ (display none, gán rỗng lỗi)
    //     document.getElementById('error_tenSinhVien').style.display ='none';
    // };
    // if(sinhVien.email.trim()===''){
    //     //dom đến thẻ thông báo dduoiws thẻ s input maSv
    //     document.getElementById('error_email').style.display = 'block';
    //     document.getElementById('error_email').innerHTML = 'email sinh viên không được bỏ trống!';
    //     valid =false;
    // }else{ // trường hớp người dùng nhập hợp lệ (display none, gán rỗng lỗi)
    //     document.getElementById('error_email').style.display ='none';
    // };
    // if(sinhVien.diemToan.trim()===''){
    //     //dom đến thẻ thông báo dduoiws thẻ s input maSv
    //     document.getElementById('error_diemToan').style.display = 'block';
    //     document.getElementById('error_diemToan').innerHTML = 'Điểm toán không được bỏ trống!';
    //     valid =false;
    // }else{ // trường hớp người dùng nhập hợp lệ (display none, gán rỗng lỗi)
    //     document.getElementById('error_diemToan').style.display ='none';
    // };
    // if(sinhVien.diemHoa.trim()===''){
    //     //dom đến thẻ thông báo dduoiws thẻ s input maSv
    //     document.getElementById('error_Hoa').style.display = 'block';
    //     document.getElementById('error_Hoa').innerHTML = ' Điểm Hóa không được bỏ trống!';
    //     valid =false;
    // }else{ // trường hớp người dùng nhập hợp lệ (display none, gán rỗng lỗi)
    //     document.getElementById('error_Hoa').style.display ='none';
    // };
    // if(sinhVien.diemLy.trim()===''){
    //     //dom đến thẻ thông báo dduoiws thẻ s input maSv
    //     document.getElementById('error_diemLy').style.display = 'block';
    //     document.getElementById('error_diemLy').innerHTML = 'Điểm Lý không được bỏ trống!';
    //     valid =false;
    // }else{ // trường hớp người dùng nhập hợp lệ (display none, gán rỗng lỗi)
    //     document.getElementById('error_diemLy').style.display ='none';
    // };
    // if(sinhVien.diemRenLuyen.trim() ===''){
    //     //dom đến thẻ thông báo dduoiws thẻ s input maSv
    //     document.getElementById('error_diemRenLuyen').style.display = 'block';
    //     document.getElementById('error_diemRenLuyen').innerHTML = 'Điểm Rèn luyện không được bỏ trống!';
    //     valid =false;
    // }else{ // trường hớp người dùng nhập hợp lệ (display none, gán rỗng lỗi)
    //     document.getElementById('error_diemRenLuyen').style.display ='none';
    // };
    if(!valid){
        //Nếu như valid =false => không hợp lệ
        return;
    }
    



    // push(): Phương thức thêm 1 phần từ vao mangSinhVien
    mangSinhVien.push(sinhVien);

        renderTableSinhVien(mangSinhVien);
        luuLocalStorage();
    
    // Cach 1 
//

//     // Tạo nội dung thẻ tr sinhVien

//     var trSinhVien = document.createElement('tr');
//     // Tạo nội dung các thẻ td
//     var tdMaSinhVien = document.createElement('td');
//     tdMaSinhVien.innerHTML = sinhVien.maSV;
//     var tdTenSinhVien = document.createElement('td');
//     tdTenSinhVien.innerHTML = sinhVien.tenSV;

//     var tdEmail = document.createElement('td');

//     tdEmail.innerHTML = sinhVien.email;

//     var tdLoaiSV = document.createElement('td');
//     tdLoaiSV.innerHTML = sinhVien.xepLoai();

//     var tdDiemTrungBinh = document.createElement('td');
//     tdDiemTrungBinh.innerHTML = sinhVien.tinhDiemTrungBinh();

//     var tdDiemRenLuyen = document.createElement('td');
//     tdDiemRenLuyen.innerHTML = sinhVien.diemRenLuyen;

//     // Thêm 1 trường td dành co button xóa
//     var tdAction = document.createElement('td');

//     var btnXoa = document.createElement('button');
//     btnXoa.innerHTML = 'Xóa';
//     btnXoa.className =' btn btn-danger';
//     btnXoa.id = 'btnXoa';
//     btnXoa.onclick = function(){
//         // Tìm ra phần tử cha (td) chấm parentelement => từ td chấm parentelement lần nữa tìm ra tr xóa
//         btnXoa.parentElement.parentElement.remove();
//     }
//     tdAction.appendChild(btnXoa);
// // đưa thẻ td vào tr
// trSinhVien.appendChild(tdMaSinhVien);
// trSinhVien.appendChild(tdTenSinhVien);
// trSinhVien.appendChild(tdEmail);
// trSinhVien.appendChild(tdLoaiSV);
// trSinhVien.appendChild(tdDiemTrungBinh);
// trSinhVien.appendChild(tdDiemRenLuyen);
// trSinhVien.appendChild(tdAction);
// // Dom đến thẻ tbody appenchild(tr)
// document.getElementById('tableSinhVien').appendChild(trSinhVien);
}
var renderTableSinhVien = function(mangSV){

    // từ dữ liệu mag=ngr tạo ra cá thẻ tr tương ứng

    var chuoiTr = '';
    for(var index = 0; index < mangSV.length; index++){
        // Mỗi lần duyệt lấy ra dữ liệu của 1 sinh viên trong mảng
        var sinhVien = mangSV[index];
        // Tạo oject mới lấy dữ liệu từ mảng sinh viên gắn qua
        var sv = new SinhVien();
        sv.maSV = sinhVien.maSV;
        sv.tenSV = sinhVien.tenSV;
        sv.email = sinhVien.email;
        sv.diemHoa = sinhVien.diemHoa;
        sv.diemToan = sinhVien.diemToan;
        sv.diemLy = sinhVien.diemLy;
        sv.diemRenLuyen = sinhVien.diemRenLuyen;
        //  từ dữ liệu sinh viên tạo ra từng dòng <> tương ứng
        // $ lấy giá trị
        chuoiTr += `
                <tr>
                    <td>${sv.maSV} </td>
                    <td>${sv.tenSV}</td>
                    <td>${sv.email}</td>
                    <td>${sv.xepLoai()}</td>
                    <td>${sv.tinhDiemTrungBinh()}</td>
                    <td>${sv.diemRenLuyen}</td>
                    <td><button class="btn btn-danger" onclick="xoaSinhVien('${sv.maSV}')">Xóa</button></td>
                </tr>
        `
    }
    //Thoát ra vòng lặp
    document.getElementById('tableSinhVien').innerHTML=chuoiTr;
}
var xoaSinhVien = function(maSV){
// từ mã sinh viên sẽ tìm ra thằng sinh viên cần xóa    

for( var index = mangSinhVien.length-1; index >=0 ; index-- ){
    // mỗi lần duyệt lấy ra 1 sinh viên
    var sinhVien = mangSinhVien[index];
    if ( sinhVien.maSV === maSV) // nếu sinh viên trong mảng có mã = mã sinh viên đc click{
        // Tại sị trí đó mình sẽ xóa phần đó đi
        mangSinhVien.splice(index,1); // 1 là xóa chính nó 2 là xóa kế bên nó;
    }
    // sau khí xóa xong tạo lại tableSinhVien
    renderTableSinhVien(mangSinhVien);
    // xóa được rồi đè nó lại ko lưu trong Storage nữa
    luuLocalStorage();
    console.log(mangSinhVien);
}   
 // mảng trong js là linkedlist chứ không phải mảng
 // xóa thì chạy ngược lại

    var luuLocalStorage = function(){
        // biến mảng sinh viên thành chuỗi
        var sMangSinhVien = JSON.stringify(mangSinhVien);
        // Luu vào local storage
        localStorage.setItem('mangSinhVien',sMangSinhVien);
    }
    var layDuLieuLocalStorage = function(){
        // kiểm tra nó có không mới lấy
        if ( localStorage.getItem('mangSinhVien')){
             //lấy dũ liệu từ localstorage 
        var sMangSinhVien = localStorage.getItem('mangSinhVien');
        // chuyển chuỗi localStorage về mảng (object) và gán cho mảng sinh viên
            mangSinhVien = JSON.parse(sMangSinhVien);
            console.log(mangSinhVien);
            // gọi hàm render mangSinhVien để render lại table
            renderTableSinhVien(mangSinhVien);
            

        }
    
    }
    // lấy dữ liệu ra khi load trang
    layDuLieuLocalStorage();

    var hienThiThongTinSinhVien1 = function(){
        console.log('Hien thi thong tin sinh vien')
    }
    
// git checkout -b dev A  
// naỳ là tạo nhanh nè
// git push -u  origin [tenNhanh tao luc nay]  tạo nhánh trên sever
// git pull origin [tenNhanh] pull nhanh ve
/// git branch   xem nhanh
// git checkout tenNhanh  chuyen nhanh
 var f_Thang = function (){
     console.log("thang")
 }
var hienThiThongTinSinhVIen = function () {
    console.log('Tấn code, hiển thị thông tin sinh viên');
}

//Tấn comment - test

var hienThiThongTinSinhVIen1 = function () {
    console.log('Trâm code, hiển thị thông tin sinh viên');
}
