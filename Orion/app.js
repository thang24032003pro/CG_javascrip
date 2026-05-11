const canvas = document.getElementById('radarCanvas');
const ctx = canvas.getContext('2d');
let selectedFlightId = null;

const rawFlights = [
    { id: "VN11", x: 150, y: 200, speed: 1 },
    { id: "ERR_1", x: null, y: 100 }, // Lỗi x
    { id: "US55", x: 400, y: 150, speed: 0.5 },
    null, 
    { id: "JS404", x: 200, y: "undefined" }, // Lỗi y
    { id: "AL99", x: 50, y: 50, speed: 2 }
];

canvas.addEventListener('click', (e) => {
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    flights.forEach(f => {
        const dist = Math.sqrt((mouseX - f.x)**2 + (mouseY - f.y)**2);
        if (dist <= 10) { 
            selectedFlightId = f.id;
            console.warn(`CẢNH BÁO: Đã chọn máy bay ${f.id}`);
        }
    });
});

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    ctx.strokeStyle = "rgba(0, 255, 0, 0.2)";
    ctx.beginPath();
    ctx.arc(300, 300, 200, 0, Math.PI * 2);
    ctx.stroke();

    rawFlights.forEach(flight => {
        try {
            if (!flight || typeof flight.x !== 'number' || typeof flight.y !== 'number') {
                throw new Error(`Dữ liệu hỏng tại tàu bay: ${flight?.id || 'Không ID'}`);
            }

            ctx.beginPath();
            ctx.arc(flight.x, flight.y, 5, 0, Math.PI * 2);
            ctx.fillStyle = (flight.id === selectedFlightId) ? "red" : "lime";
            ctx.fill();
            
            ctx.fillStyle = "white";
            ctx.fillText(flight.id, flight.x + 8, flight.y);

            flight.x += (flight.speed || 0.5);
            if (flight.x > canvas.width) flight.x = 0;

        } catch (err) {
            console.warn("Radar Shield chặn dữ liệu rác:", err.message);
        }
    });

    requestAnimationFrame(update);
}

update();