const reservation = document.getElementById('reservation');

if (reservation) {
    reservation.addEventListener('click', () => {
        if (username) {
            window.location.href = `reservation-form.html?id=${encodeURIComponent(id)}&username=${encodeURIComponent(username)}`;
        }
        else {
            window.location.href = `login.html?id=${encodeURIComponent(id)}`;
        }
    });
}

// Fetch the car details from carDetails.json
fetch('../data/carDetails.json')
    .then(response => response.json())
    .then(data => {
        // Find the car details by ID
        const car = data.find(car => car.id == id);

        if (car) {
            // Display the car details
            document.getElementById('car-name').textContent = car.name;
            document.getElementById('vehicle-type').textContent = car.vehicle_type;
            document.getElementById('seats').textContent = car.seats;
            document.getElementById('daily-rate').textContent = car.daily_rate;
            document.getElementById('weekly-rate').textContent = car.weekly_rate;
            document.getElementById('monthly-rate').textContent = car.monthly_rate;
            document.getElementById('boot-space').textContent = car.boot_space;
            document.getElementById('car-description').textContent = car.description;

            const carImage = document.getElementById('car-image');
            carImage.src = car.image;
            carImage.alt = car.name;
        }
        else {
            // Handle case when car ID is invalid
            document.getElementById('car-name').textContent = "Car not found";
            document.getElementById('car-price').textContent = "";
            document.getElementById('car-description').textContent = "";
        }
    })
    .catch(error => console.error('Error loading car details:', error));
