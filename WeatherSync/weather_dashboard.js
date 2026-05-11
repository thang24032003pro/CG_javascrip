const sensorData = [
    { id: "S1", temp: 32.5, humidity: 80 },
    { id: "S2", temp: null, humidity: 90 }, 
    { id: "S3", temp: 35.1, humidity: 75 },
    { id: "S4", temp: 40.2 }, 
    "Tôi là hacker, tôi gửi chuỗi thay vì object", 
    { id: "S5", temp: 150.0, humidity: 60 }, 
    { id: "S6", temp: 28.0, humidity: 60 }
];

function processWeatherData(dataList) {
    console.log("%c--- BẮT ĐẦU XỬ LÝ DỮ LIỆU ---", "color: blue; font-weight: bold;");

    dataList.forEach((sensor, index) => {
        let currentId = sensor?.id || `Unknown-Index-${index}`;

        try {
            if (typeof sensor !== 'object' || sensor === null) {
                throw new TypeError(`Dữ liệu không phải là Object hợp lệ.`);
            }

            if (typeof sensor.temp !== 'number') {
                throw new Error(`Giá trị nhiệt độ không tồn tại hoặc không phải là số.`);
            }

            if (sensor.temp < -50 || sensor.temp > 100) {
                throw new RangeError(`Nhiệt độ ${sensor.temp}°C nằm ngoài ngưỡng vật lý cho phép.`);
            }

            let formattedTemp = sensor.temp.toFixed(1);
            console.log(`✅ Cảm biến ${currentId}: Nhiệt độ là ${formattedTemp}°C`);

        } catch (error) {
            console.warn(`⚠️ Lỗi tại Cảm biến [${currentId}]: ${error.message}`);
        } finally {
            console.log(`... Hoàn tất quét thiết bị ${currentId}`);
        }
    });

    console.log("%c--- HOÀN THÀNH XỬ LÝ DỮ LIỆU ---", "color: blue; font-weight: bold;");
}

processWeatherData(sensorData);