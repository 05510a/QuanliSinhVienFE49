// folder chỉ chứa lớp đối tượng 
// khai báo prototype ( giống với lớp đối tượng bên java class)
var SinhVien = function(){
    this.maSV = '';
    this.tenSV='';
    this.diemToan='';
    this.diemLy = '';
    this.diemHoa='';
    this.diemRenLuyen='';
    this.loaiSV = '';
    this.email = '';
    this.tinhDiemTrungBinh = function(){
        return (Number(this.diemHoa) + Number(this.diemLy) + Number(this.diemToan))/3;
    };
    this.xepLoai = function(){
        var diemTrungBinh= this.tinhDiemTrungBinh();
        if(this.diemRenLuyen<5){
    return 'yếu';
    }
    else if(this.diemRenLuyen>=5){
    if(diemTrungBinh < 5){
        return 'Yếu';
    }else if(diemTrungBinh >=5 && diemTrungBinh <6.5){
        return 'Trung Bình Khá';
    }else if(diemTrungBinh >=6.5 && diemTrungBinh <8){
        return 'khá';
    }else if (diemTrungBinh >=8 && diemTrungBinh <9){
        return 'giỏi';
    }else if (diemTrungBinh >=9 && diemTrungBinh<=10){
        return 'xuất sắc';
    }else{
        return 'điểm rèn luyện không hợp lệ!';
    }
    }
    }
    }