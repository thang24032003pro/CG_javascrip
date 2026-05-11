for(let i = 0; i < 5000000; i++) {} 

console.log("Hệ thống GateKeeper đang khởi động luồng xác thực...");

let staffCode = prompt("Hệ thống GateKeeper: Vui lòng nhập mã thẻ nhân viên của bạn:");

if (staffCode === null || staffCode.trim() === "") {
    alert("❌ Truy cập bị từ chối! Bạn chưa cung cấp mã nhân viên hợp lệ.");
} else {

    let isConfirm = confirm(`Bạn có chắc chắn muốn sử dụng mã [${staffCode.trim()}] để đăng nhập không?`);


    if (isConfirm) {
        alert("Truy cập thành công! Chào mừng bạn đến với MegaCorp.");
    } else {
        alert(" Đã hủy yêu cầu đăng nhập.");
    }
}