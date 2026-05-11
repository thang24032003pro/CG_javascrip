// 1. Khởi tạo mảng dữ liệu mẫu (Dummy data nhờ AI cung cấp)
let employees = [
    { id: 1, name: "Nguyễn Văn A", salary: 15000000 },
    { id: 2, name: "Trần Thị B", salary: 12000000 },
    { id: 3, name: "Lê Văn C", salary: 20000000 }
];

// Lấy các phần tử DOM
const employeeForm = document.querySelector('#employeeForm');
const employeeList = document.querySelector('#employeeList');
const searchInput = document.querySelector('#searchInput');
const totalSalaryDisplay = document.querySelector('#totalSalary');

// 2. Hàm hiển thị danh sách (Sử dụng .map)
function renderEmployees(data) {
    if (data.length === 0) {
        employeeList.innerHTML = `<li style="color: gray;">Không tìm thấy nhân viên nào...</li>`;
        return;
    }
    
    const htmlStrings = data.map(emp => `
        <li class="employee-item">
            <span><strong>${emp.name}</strong> - ${emp.salary.toLocaleString()} VNĐ</span>
            <button class="delete-btn" onclick="deleteEmployee(${emp.id})">Xóa</button>
        </li>
    `);
    employeeList.innerHTML = htmlStrings.join('');
}

// 3. Hàm tính tổng lương (Sử dụng .reduce)
function calculateTotalSalary() {
    const total = employees.reduce((accumulator, currentValue) => {
        return accumulator + Number(currentValue.salary);
    }, 0);
    totalSalaryDisplay.innerText = total.toLocaleString();
}

// 4. Xử lý thêm nhân viên (Chặn reload trang)
employeeForm.addEventListener('submit', function(e) {
    e.preventDefault(); // CHẶN RELOAD TRANG
    
    const name = document.querySelector('#empName').value;
    const salary = document.querySelector('#empSalary').value;

    const newEmployee = {
        id: Date.now(), // Tạo ID duy nhất bằng timestamp
        name: name,
        salary: Number(salary)
    };

    employees.push(newEmployee);
    renderEmployees(employees);
    calculateTotalSalary();
    employeeForm.reset(); // Xóa trắng form sau khi thêm
});

// 5. Xử lý tìm kiếm Realtime (Sử dụng .filter)
searchInput.addEventListener('input', function(e) {
    const keyword = e.target.value.toLowerCase().trim();
    
    const filteredEmployees = employees.filter(emp => 
        emp.name.toLowerCase().includes(keyword)
    );
    
    renderEmployees(filteredEmployees);
});

// Khởi chạy lần đầu
renderEmployees(employees);
calculateTotalSalary();