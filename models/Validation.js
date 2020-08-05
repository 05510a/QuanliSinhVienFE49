var Validation =function(){
    
    this.kiemTraRong = function(value, selectorError){
        // Trim(): Phương thức loại bỏ khoảng trồng đầu cuối của chuỗi

        if(value.trim() ===""){
            document.querySelector(selectorError).innerHTML = 'Không được bỏ trống';
            document.querySelector(selectorError).style.display='block';
            return false;
        }
        document.querySelector(selectorError).innerHTML='';
        document.querySelector(selectorError).style.display = 'none';
        return true;
    }
    this.kiemTraTatCaLaChuoi = function(value, selectorError){

        var regexAllLetter = /^[a-z A-Z]+$/;
        if(regexAllLetter.test(value.trim())){
            document.querySelector(selectorError).innerHTML = '';
            document.querySelector(selectorError).style.display = 'none';
            return true; 
        }
        document.querySelector(selectorError).innerHTML ='Không được nhập số và ký tự đặc biệt';
        document.querySelector(selectorError).style.display = 'block';
        return false;
    }
    this.kiemTraEmail = function(vaule,selectorError){
        var kiemTraEmail =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(kiemTraEmail.test(vaule.trim())){
            document.querySelector(selectorError).innerHTML = '';
            document.querySelector(selectorError).style.display = 'none';
            return true; 
        }
        document.querySelector(selectorError).innerHTML ='Email không hợp lệ';
        document.querySelector(selectorError).style.display = 'block';
        return false;
    }
    this.kiemTraMaSinhVien = function(value,selectorError){
        var kiemTraMaSinhVien = /^[a-z A-Z 0-9]+$/;
        if(kiemTraMaSinhVien.test(value)){
            document.querySelector(selectorError).innerHTML = '';
            document.querySelector(selectorError).style.display = 'none';
            return true; 
        }else{
        document.querySelector(selectorError).innerHTML ='Mã sinh viên không hợp lệ';
        document.querySelector(selectorError).style.display = 'block';
        return false;}
    }
    // kiểm tra nhập số điểm toán
    this.kiemTraTatCaLaSo = function(value,selectorError){
        var kiemTraTatCaLaSo =/^[0-9.]+$/;
        if(kiemTraTatCaLaSo.test(value.trim())){
            document.querySelector(selectorError).innerHTML = '';
            document.querySelector(selectorError).style.display = 'none';
            return true; 
        }
        document.querySelector(selectorError).innerHTML ='Điểm không hợp lệ';
        document.querySelector(selectorError).style.display = 'block';
        return false;
    }
    this.kiemTraGiaTri = function(value, selectorError, minValue,maxValue){
        var valid = this.kiemTraTatCaLaSo(value,selectorError);
        // nhỏ hơn hoặc lớn hơn giá trị thì báo lỗi 
        if(Number(value.trim())< minValue || Number(value.trim() > maxValue) || !valid){
            document.querySelector(selectorError).innerHTML = `Giá trị từ ${minValue} - ${maxValue} ! `;
            document.querySelector(selectorError).style.display = 'block';
            return false;
        }
        document.querySelector(selectorError).innerHTML ='';
        document.querySelector(selectorError).style.display = 'none';
        return true;
    }
    this.kiemTraDoDai = function(value,selectorError,minLength,maxLength){
        if(value.length < minLength || value.length < maxLength){
            document.querySelector(selectorError).innerHTML = `Độ dài từ ${minLength} - ${maxLength} ! `;
            document.querySelector(selectorError).style.display = 'block';
            return false;
        }
        document.querySelector(selectorError).innerHTML ='';
        document.querySelector(selectorError).style.display = 'none';
        return true;
    }
}