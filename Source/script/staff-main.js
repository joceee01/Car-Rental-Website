const params = new URLSearchParams(window.location.search);
const username = params.get('username');

const home = document.getElementById("home");
const displayUser = document.getElementById("username");

if (username) {
    const logout = document.getElementById("logout");
    logout.href = 'login.html';

    if (home) {
        home.href = `../reservation-listing.html?username=${encodeURIComponent(username)}`;
    }

    if (displayUser) {
        displayUser.textContent = username;
    }
}

async function getCarNameById(carId) {
    try {
        const response = await fetch("data/carDetails.json"); // Load JSON file
        const cars = await response.json(); // Parse JSON

        // Find the car by ID
        const car = cars.find(c => c.id === carId);

        return car ? car.name : "Car not found";
    } catch (error) {
        console.error("Error loading car details:", error);
        return "Error loading data";
    }
}

