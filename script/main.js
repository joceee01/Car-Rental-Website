

const params = new URLSearchParams(window.location.search);
const username = params.get('username');
const id = params.get('id');

const reserveCar = document.getElementById("reserve_car");
const exploreCar = document.getElementById("explore_car");
const home = document.getElementById("home");
const login = document.getElementById("login-btn");
const reservePay = document.getElementById("reserve_and_pay");
const displayUser = document.getElementById("username");

console.log(username)
console.log(id)

function redirectReserveCar() {
    window.location.href = 'reserve-car.html';
}

function redirectSignUp() {
    if (id) {
        window.location.href = `signup.html?id=${encodeURIComponent(id)}`;
    }
    else {
        window.location.href = 'signup.html';
    }
    
}

function redirectLogin() {
    window.location.href = 'login.html';
}
if (username) {
    if (reserveCar) {
        reserveCar.href = `reserve-car.html?username=${encodeURIComponent(username)}`;
    }

    if (exploreCar) {
        exploreCar.onclick = function () {
            window.location.href = `reserve-car.html?username=${encodeURIComponent(username)}`;
        }
    }

    if (home) {
        home.href = `../index.html?username=${encodeURIComponent(username)}`;
    }

    if (displayUser) {
        displayUser.textContent = username;
    }
    const memberLogin = document.getElementById("member_login");
    const memberReg = document.getElementById("member_register");
    
    memberLogin.textContent = `Rental History`;
    memberLogin.href = `rental-history.html?username=${encodeURIComponent(username)}`;

    memberReg.textContent = "Logout";
    memberReg.href = "login.html";


    // Handle logout
    memberReg.addEventListener('click', function () {
        sessionStorage.removeItem('username'); // Clear session storage
        window.location.reload(); // Reload the page
    });

    
}





