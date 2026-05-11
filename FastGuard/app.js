for(let i = 0; i < 1000000; i++) {} 

let playerName = prompt("Chào mừng đến với HeroQuest! Nhập tên của bạn:");

if (playerName === null || playerName.trim() === "") {
    alert("Bạn chưa nhập tên hợp lệ! Vui lòng tải lại trang để bắt đầu.");
} else {
    alert("Chào chiến binh " + playerName.trim() + "!");

    let isAdult = confirm("Xác nhận: Bạn đã đủ 18 tuổi để tham gia game này?");

    if (isAdult) {
        alert("Xác thực thành công. Chúc bạn chơi game vui vẻ!");
    } else {
        alert("Cảnh báo: Game có nội dung không phù hợp với lứa tuổi của bạn. Truy cập bị từ chối!");
        document.body.innerHTML = "<h1 style='color:red;'>Truy cập bị từ chối - Bạn chưa đủ 18 tuổi</h1>";
    }
}